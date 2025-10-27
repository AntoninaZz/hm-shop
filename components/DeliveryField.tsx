"use client";
import { useEffect, useState } from "react";

interface DeliveryFieldProps {
    value: string;
    onChange: (value: string) => void;
}

interface Settlement {
    Description: string;
    Ref: string;
    AreaDescription: string;
    RegionsDescription: string;
}

interface Warehouse {
    Description: string;
    Ref: string;
}

export default function DeliveryField({ value, onChange }: DeliveryFieldProps) {
    const [cityQuery, setCityQuery] = useState("");
    const [cityList, setCityList] = useState<Settlement[]>([]);
    const [selectedCity, setSelectedCity] = useState<Settlement | null>(null);
    const [warehouseQuery, setWarehouseQuery] = useState("");
    const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
    const [filteredWarehouses, setFilteredWarehouses] = useState<Warehouse[]>([]);
    const [showCityList, setShowCityList] = useState(false);
    const [showWarehouseList, setShowWarehouseList] = useState(false);

    useEffect(() => {
        setCityQuery(value);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Дебаунс введення міста (щоб не робити 10 запитів/сек)
    useEffect(() => {
        const timeout = setTimeout(async () => {
            if (cityQuery.length >= 2) {
                const data = await fetchSettlements(cityQuery);
                setCityList(data || []);
                setShowCityList(data && data.length > 0);
            }
        }, 400);
        return () => clearTimeout(timeout);
    }, [cityQuery]);

    // Коли користувач вибирає місто — підвантажуємо відділення
    useEffect(() => {
        if (selectedCity) {
            (async () => {
                const data = await fetchWarehouses(selectedCity.Ref);
                setWarehouses(data || []);
                setFilteredWarehouses(data || []);
            })();
        }
    }, [selectedCity]);

    // Фільтрація відділень за введенням користувача
    useEffect(() => {
        if (!warehouseQuery) {
            setFilteredWarehouses(warehouses);
        } else {
            const filtered = warehouses.filter((w) =>
                w.Description.toLowerCase().includes(warehouseQuery.toLowerCase())
            );
            setFilteredWarehouses(filtered);
        }
    }, [warehouseQuery, warehouses]);

    // Завантаження міст
    const fetchSettlements = async (query: string) => {
        const res = await fetch(`/api/novapost/settlements`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        });
        const data = await res.json();
        return data.success ? data.data : [];
    };

    // Завантаження відділень
    const fetchWarehouses = async (cityRef: string) => {
        const res = await fetch(`/api/novapost/warehouses`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cityRef }),
        });
        const data = await res.json();
        return data.success ? data.data : [];
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="relative">
                <input
                    type="text"
                    placeholder="City"
                    value={cityQuery}
                    onChange={(e) => {
                        setCityQuery(e.target.value);
                        setSelectedCity(null);
                        setShowCityList(true);
                    }}
                    onFocus={() => cityList.length && setShowCityList(true)}
                    onBlur={() => setTimeout(() => setShowCityList(false), 150)}
                    className="flex-1 outline-none placeholder-[var(--color-muted-green)] w-full"
                />
                {showCityList && cityList.length > 0 && !selectedCity && (
                    <ul className="absolute bg-white border border-[var(--color-muted-green)] rounded-lg shadow-md w-full max-h-60 overflow-y-auto z-10">
                        {cityList.map((city) => (
                            <li
                                key={city.Ref}
                                className="p-2 hover:bg-[var(--color-milk)] cursor-pointer"
                                onClick={() => {
                                    setSelectedCity(city);
                                    setCityQuery(`${city.Description}, ${city.AreaDescription}`);
                                    setCityList([]);
                                    setShowCityList(false);
                                }}
                            >
                                {city.Description} — {city.AreaDescription}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {selectedCity && (
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Nova Post office"
                        value={warehouseQuery}
                        onChange={(e) => {
                            setWarehouseQuery(e.target.value);
                            setShowWarehouseList(true);
                        }}
                        onFocus={() => filteredWarehouses.length && setShowWarehouseList(true)}
                        onBlur={() => setTimeout(() => setShowWarehouseList(false), 150)}
                        className="flex-1 outline-none placeholder-[var(--color-muted-green)] w-full"
                    />
                    {showWarehouseList && filteredWarehouses.length > 0 && (
                        <ul className="absolute bg-white border border-[var(--color-muted-green)] rounded-lg shadow-md w-full max-h-60 overflow-y-auto z-10">
                            {filteredWarehouses.map((wh) => (
                                <li
                                    key={wh.Ref}
                                    className="p-2 hover:bg-[var(--color-milk)] cursor-pointer"
                                    onClick={() => {
                                        setWarehouseQuery(wh.Description);
                                        setFilteredWarehouses([]);
                                        setShowWarehouseList(false);
                                        const fullAddress = `${selectedCity.Description}, ${selectedCity.AreaDescription}, ${wh.Description}`;
                                        onChange(fullAddress); // передаємо обрану адресу батьку
                                    }}
                                >
                                    {wh.Description}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
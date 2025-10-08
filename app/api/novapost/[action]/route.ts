import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { action: string } }) {
    try {
        const body = await req.json();
        const payload = {
            apiKey: process.env.NOVAPOST_API_KEY!,
            modelName: "",
            calledMethod: "",
            methodProperties: {},
        };

        if (params.action === "settlements") {
            payload.modelName = "AddressGeneral";
            payload.calledMethod = "getSettlements";
            payload.methodProperties = {
                FindByString: body.query,
                Warehouse: "1",
                Page: "1",
                Limit: "20",
            };
        } else if (params.action === "warehouses") {
            if (!body.cityRef) {
                return NextResponse.json({ error: "cityRef is required" }, { status: 400 });
            }
            payload.modelName = "Address";
            payload.calledMethod = "getWarehouses";
            payload.methodProperties = {
                SettlementRef: body.cityRef,
            };
        } else {
            return NextResponse.json({ error: "Invalid action" }, { status: 400 });
        }

        const res = await fetch(process.env.NEXT_PUBLIC_NOVAPOST_API_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error("[novapost_POST]", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
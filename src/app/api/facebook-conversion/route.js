import { NextResponse } from 'next/server';
const bizSdk = require('facebook-nodejs-business-sdk');

const access_token = process.env.FACEBOOK_ACCESS_TOKEN;
const pixel_id = '1002296057592912';
const api = bizSdk.FacebookAdsApi.init(access_token);

export async function POST(request) {
    try {
        const data = await request.json();
        const { eventName, eventData, userData } = data;

        const serverEvent = (new bizSdk.ServerEvent())
            .setEventName(eventName)
            .setEventTime(Math.floor(Date.now() / 1000))
            .setUserData(userData)
            .setEventSourceUrl(eventData.sourceUrl)
            .setActionSource('website');

        const eventsData = [serverEvent];
        const eventRequest = (new bizSdk.EventRequest(access_token, pixel_id))
            .setEvents(eventsData);

        await eventRequest.execute();

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Facebook Conversion API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

import { Event } from "../utils/utils";

export const getAllEvents = async (): Promise<Event[]> => {
    const response: Response = await fetch("http://localhost:3000/api/events", {
        method: "GET"
    });

    return response.json()
}

export const getFeaturedEvents = async (): Promise<Event[]> => {
    const response: Response = await fetch("http://localhost:3000/api/events/featured", {
        method: "GET"
    });

    return response.json()
}

export const getEventById = async (id: string): Promise<Event> => {
    const response: Response = await fetch(`http://localhost:3000/api/events/${id}`, {
        method: "GET"
    });

    return response.json()
}

export const getFilteredEvents = async (dateFilter: { year: number; month: number }): Promise<Event[]> => {
    const { year, month } = dateFilter;
    const response: Response = await fetch(`http://localhost:3000/api/events/${year}/${month}`, {
        method: "GET"
    });

    return response.json()
}
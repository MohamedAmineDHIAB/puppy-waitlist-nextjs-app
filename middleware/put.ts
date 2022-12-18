import dayjs from "dayjs";

export default function put(
    id: string,
    arrival: string,
    serviced: boolean,
    Data: any[]
) {
    // search for the document with the date equal to the date of arrival (to optimize our search and avoid looking at all the entries)
    // then search for the entry with the id equal to the id of the entry to be updated
    // then update the serviced property of the entry
    // update Data accordingly
    // return the updated entry
    Data.map((item: any) => {
        if (item.date === dayjs(arrival).format("YYYY-MM-DD")) {
            item.entries.map((entry: any) => {
                if (entry.id === id) {
                    entry.serviced = serviced;
                }
            });
        }
    });
    return Data;
}

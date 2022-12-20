import dayjs from "dayjs";

export default function delete_(id: string, arrival: string, Data: any[]) {
    // search for the document with the date equal to the date of arrival (to optimize our search and avoid looking at all the entries)
    // then filter the entries of that document to keep only the entries with the id different to the id of the entry to be deleted
    let copyData = [...Data];
    copyData.map((item: any) => {
        if (item.date === dayjs(arrival).format("YYYY-MM-DD")) {
            item.entries = item.entries.filter((entry: any) => entry.id !== id);
        }
    });
    return copyData;
}

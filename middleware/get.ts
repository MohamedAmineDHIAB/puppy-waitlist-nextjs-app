import { Dayjs } from "dayjs";

export default function get(
    FilterValue: string,
    SearchValue: string,
    DateValue: Dayjs | null,
    Data: any[]
) {
    let copyFakeData: any[];
    const date = DateValue?.format("YYYY-MM-DD");
    copyFakeData = date ? Data.filter((item) => item.date === date) : Data;
    // reorder every entries array in the data based on prevEntryId and nextEntryId
    copyFakeData = copyFakeData.map((item: any) => {
        let entries: any[];
        entries = item.entries;
        let newEntries: any[] = [];
        let entry = entries.find((entry: any) => entry.prevEntryId === null);
        while (entry) {
            newEntries.push(entry);
            entry = entries.find(
                (entry: any) => entry.prevEntryId === newEntries.slice(-1)[0].id
            );
        }
        return { ...item, entries: newEntries };
    });
    copyFakeData = copyFakeData.map((item: any) => {
        let entries: any[];
        entries = item.entries;
        if (FilterValue !== "all") {
            entries = entries.filter(
                (entry: any) => entry.serviced === (FilterValue === "serviced")
            );
        }
        if (SearchValue !== "") {
            entries = entries.filter((entry: any) =>
                (entry.owner + entry.puppyName + entry.requestedService)
                    .toLowerCase()
                    .includes(SearchValue.toLowerCase())
            );
        }
        return { ...item, entries };
    });

    return copyFakeData;
}

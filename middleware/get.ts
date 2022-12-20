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
        // if entry is not found but the length of newEntries is not equal to the length of entries pick a random entry from entries and add it to newEntries
        if (!entry && newEntries.length !== entries.length) {
            entry = entries.find(
                (entry: any) =>
                    !newEntries.some(
                        (newEntry: any) => newEntry.id === entry.id
                    )
            );
        }
        while (entry) {
            newEntries.push(entry);
            entry = entries.find(
                (entry: any) => entry.prevEntryId === newEntries.slice(-1)[0].id
            );
            // if entry is not found but the length of newEntries is not equal to the length of entries pick a random entry from entries and add it to newEntries
            if (!entry && newEntries.length !== entries.length) {
                entry = entries.find(
                    (entry: any) =>
                        !newEntries.some(
                            (newEntry: any) => newEntry.id === entry.id
                        )
                );
            }
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

import FakeData from "../data/fakeData";
import { Dayjs } from "dayjs";

const ConcatEntries = (data: any) => {
    let entries: any[];
    entries = [];
    data.forEach((item: any) => {
        entries = entries.concat(item.entries);
    });
    return entries;
};
export default function get(
    FilterValue: string,
    SearchValue: string,
    DateValue: Dayjs | null
) {
    let copyFakeData: any[];
    const date = DateValue?.format("YYYY-MM-DD");
    copyFakeData = date
        ? FakeData.filter((item) => item.date === date)
        : FakeData;
    console.log(copyFakeData);
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
                entry.owner.toLowerCase().includes(SearchValue.toLowerCase())
            );
        }
        return { ...item, entries };
    });
    console.log(copyFakeData);

    return copyFakeData;
}

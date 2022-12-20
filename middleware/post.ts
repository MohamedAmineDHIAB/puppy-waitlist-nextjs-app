import dayjs from "dayjs";

export default function post(item: any, Data: any[]) {
    // add new item to the entries of the data where the date matches otherwise create a new date
    let copyData = [...Data];
    const item_date = dayjs(item.arrival).format("YYYY-MM-DD");
    const index = copyData.findIndex((data) => data.date === item_date);
    if (index === -1) {
        item.prevEntryId = null;
        item.nextEntryId = null;
        copyData.push({
            date: item_date,
            entries: [item],
        });
    } else {
        const lastEntry = copyData[index].entries.slice(-1)[0];
        if (lastEntry) {
            item.prevEntryId = lastEntry.id;
            lastEntry.nextEntryId = item.id;
        } else {
            item.prevEntryId = null;
        }
        item.nextEntryId = null;
        copyData[index].entries.push(item);
    }
    console.log(item.id);
    return copyData;
}

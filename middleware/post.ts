import dayjs from "dayjs";

export default function post(item: any, Data: any[]) {
    // add new item to the entries of the data where the date matches otherwise create a new date
    let copyData = [...Data];
    const index = copyData.findIndex((data) => data.date === item.arrival);
    if (index === -1) {
        item.prevEntryId = null;
        item.nextEntryId = null;
        copyData.push({
            date: dayjs(item.arrival).format("YYYY-MM-DD"),
            entries: [item],
        });
    } else {
        const lastEntry = copyData[index].entries.slice(-1)[0];
        console.log(lastEntry);
        item.prevEntryId = lastEntry.id;
        item.nextEntryId = null;
        copyData[index].entries.push(item);
    }
    console.log(item);
    return copyData;
}

export type align = "inherit" | "left" | "center" | "right" | "justify";
export const Columns = [
    { name: "Puppy Name", align: "left" },
    { name: "Owner", align: "left" },
    { name: "Requested Service", align: "left" },
    { name: "Serviced", align: "center" },
    { name: "Arrival", align: "left" },
];

let FakeData = [
    {
        date: "2022-12-05",
        entries: [
            {
                id: "45658a88-6441-46b2-933a-23817d2c1fbc",
                arrival: "2022-12-05T12:00:00Z",
                owner: "Bill Thornberry",
                puppyName: "Cuddles",
                requestedService: "Grooming",
                serviced: true,
                prevEntryId: null,
                nextEntryId: "e9e365b7-8588-4205-bc03-b71cab3c1a8a",
            },
            {
                id: "7fb8834f-810c-4a47-ade6-ab7999c0167d",
                arrival: "2022-12-05T11:48:29Z",
                owner: "Jill Doe",
                puppyName: "Fluffy",
                requestedService: "Full Body Shave",
                serviced: false,
                prevEntryId: "e9e365b7-8588-4205-bc03-b71cab3c1a8a",
                nextEntryId: "70569642-3aca-4c9d-b72b-ca640a53e6a7",
            },
            {
                id: "70569642-3aca-4c9d-b72b-ca640a53e6a7",
                arrival: "2022-12-05T13:03:01Z",
                owner: "Diane de Poitiers",
                puppyName: "Marie",
                requestedService: "Exotic Hairdo",
                serviced: false,
                prevEntryId: "7fb8834f-810c-4a47-ade6-ab7999c0167d",
                nextEntryId: null,
            },
            {
                id: "e9e365b7-8588-4205-bc03-b71cab3c1a8a",
                arrival: "2022-12-05T12:01:40Z",
                owner: "Bob Hope",
                puppyName: "Paws",
                requestedService: "Nail Clipping",
                serviced: false,
                prevEntryId: "45658a88-6441-46b2-933a-23817d2c1fbc",
                nextEntryId: "7fb8834f-810c-4a47-ade6-ab7999c0167d",
            },
        ],
    },
];
export default FakeData;

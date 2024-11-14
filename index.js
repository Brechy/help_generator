const chores = [{
    day: "Monday",
    chore: "sweep and mop kitchen floor"
},
{
    day: "Monday",
    chore: "sweep and mop livingroom floor"
},
{
    day: "Tuesday",
    chore: "scrub toilets"
},
{
    day: "Tuesday",
    chore: "clean bathroom sinks"
},
{
    day: "Wedneday",
    chore: "wipe down kitchen cabinets"
},
{
    day: "Wedneday",
    chore: "wipe all windows"
},
{
    day: "Thursday",
    chore: "Empty all trashcans around the house."
},
{
    day: "Thursday",
    chore: "Throw out any clothing that is damaged, doesn't fit, or that you have not work in 3-6 months."
},
{
    day: "Thursday",
    chore: "Shred and throw out all junk mail, catalogs, magazines, etc."
},
{
    day: "Thursday",
    chore: "Discard school or craft projects you are not keeping."
},
{
    day: "Friday",
    chore: "wash, dry, and put away all personal laundry"
},
{
    day: "Friday",
    chore: "wash all bedding"
},
{
    day: "Saturday",
    chore: "set timer for 20 minutes and clean what you can see"
}]

//get current day of the week
const date = new Date();
const day = date.getDay();

//map day numbers to day names
const getDayName = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
}
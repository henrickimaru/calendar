const holidays = [
        { date: [1, 1], name: "New Year's Day" }, 
        { date: [1, 29], name: "Chinese New Year" }, 
        { date: [2, 14], name: "Valentine's Day" }, 
        { date: [4, 9], name: "Araw ng Kagitingan" }, 
        { date: [4, 17], name: "Maundy Thursday" }, 
        { date: [4, 19], name: "Black Saturday" }, 
        { date: [4, 20], name: "Easter Sunday" }, 
        { date: [5, 1], name: "Labor Day" },  
        { date: [6, 12], name: "Independence Day" }, 
        { date: [8, 21], name: "Ninoy Aquino Day"},
        { date: [8, 25], name: "National Hero's Day" }, 
        { date: [9, 8], name: "Teacher's Day" }, 
        { date: [10, 31], name: "Halloween" }, 
        { date: [11, 1], name: "All Saint's Day"},
        { date: [11, 30], name: "Bonifacio Day" },
        { date: [12, 8], name: "Feast of the Immaculate Conception of Mary" }, 
        { date: [12, 24], name: "Christmas Eve" }, 
        { date: [12, 25], name: "Christmas Day" }, 
        { date: [12, 30], name: "Rizal Day"}
    ];

    document.addEventListener('DOMContentLoaded', function () {
const monthYear = document.getElementById('month-year');
const daysContainer = document.getElementById('days');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

let currentDate = new Date();
let today = new Date();

function renderCalendar(date, highlightDays = []) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${months[month]} ${year}`;
    daysContainer.innerHTML = '';

    
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDay; i > 0; i--) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = prevMonthLastDay - i + 1;
        dayDiv.classList.add('fade');
        daysContainer.appendChild(dayDiv);
    }

   
    for (let i = 1; i <= lastDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;

 
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('today');
        }

       
        const holiday = holidays.find(h => h.date[0] === month + 1 && h.date[1] === i);
        if (holiday) {
            dayDiv.classList.add('holiday');
            dayDiv.setAttribute('data-holiday', holiday.name);
        }

       
        if (highlightDays.includes(i)) {
            dayDiv.classList.add('highlight');
        }

        daysContainer.appendChild(dayDiv);
    }

    
    const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
    for (let i = 1; i <= nextMonthStartDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        dayDiv.classList.add('fade');
        daysContainer.appendChild(dayDiv);
    }
}


prevButton.addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextButton.addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);
});
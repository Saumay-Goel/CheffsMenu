const all_days = {
    "Monday" : {
        "Breakfast": ['Bread', 'Butter', 'Jam', 'Millet', 'Dosa', 'Idly', 'Podi Oil', 'Chutney', 'Sambar', 'Chapathi', 'White khuruma', 'Tea/Coffee/Milk', 'Boiled Egg'],

        "Lunch": ['Chappathi', 'Rajma Masala', 'Jeera Pulao', 'Steamed Rice', 'Arachivita Sambar', 'Panchratna Dal', 'Drumstick Brinjal Mochai', 'Dum Aloo', 'Pineapple Rasam', 'Pickle', 'Butter Milk', 'Fryums'],

        "Snacks": ['Pav Bhaji', 'Tea/Coffee'],

        "Dinner": ['Madras Paratha', 'Mattar Paneer Masala', 'Vegetable Idly', 'Idly Podi Oil', 'Special Chutney', 'Steamed Rice', 'Hara Moong Dal Sambar', 'Rasam', 'Pickle Fryums', 'Veg Salad', 'Milk', 'Banana', 'Fish Gravy']
    },

    "Tuesday": {
        "Breakfast": ['Bread', 'Butter', 'Jam', 'Poori', 'Dal Aloo Masala', 'Semia Veg Kichadi', 'Chutney','Tea/Coffee / Milk'],

        "Lunch": ['Sweet', 'Millet Chappathi', 'Meal Maker Curry', 'Bahara Pulao', 'Variety Rice', 'Curd Rice', 'Steamed Rice', 'Dal Fry', 'Tomato Rasam', 'Urulai Peas Rosted Pickle'],

        "Snacks": ['Mysore Bonda', 'ChutneyTea / Coffee'],

        "Dinner": ['Panjabi Paratha', 'Black Chenna', 'Steamed Rice', 'Dal Fry', 'Veg/ Chilly Gobi Dry', 'Milet Dosa', 'Idly Podi', 'oil,Sambar', 'Pepper Rasam', 'Pickle Fryums', 'Ved Salad', 'Milk, Special Fruits', 'Mutton Gravy'],
    },

    "Wednesday": {
        "Breakfast": ['Bread','Butter', 'Jam', 'Millet Idly', 'IdlyPodi', 'Oil', 'Sambar', 'Chutney', 'Poha', 'Mint Chutney', 'Tea/Coffee/ Milk', 'Masala Omelet'],

        "Lunch": ['Chappati', 'Muttar Masala', 'Bhindi Aloo Bujjiya', 'Veg Pulao', 'Steamed Rice', 'Masala Sambar', 'Tomato Dal', 'Garlic Rasam', 'Pickle', 'Poriyal', 'Butter Milk', 'Fryums'],

        "Snacks": ['Mysore Bonda', 'ChutneyTea / Coffee'],

        "Dinner": ['Chappathi', 'Steamed Rice', 'Dal Tadka','Butter Chicken Masala(Non-Veg)','Panneer Butter Masala/Butter Panneer', 'Rasam', 'Pickle Fryums', 'Veg Salad', 'Milk', 'Banana']
    },

    "Thursday": {
        "Breakfast": ['Bread', 'Butter', 'Jam', 'Millet Idiyappam Chappathi', 'Channa Masala / WhiteKhurma Chutney', 'Tea/Coffee/Milk'],

        "Lunch": ['Chappathi', 'Aloo Gobi Athiraki', 'Onion Pulao', 'Steamed Rice', 'Punjabi Dal Fry','Kadi Pakoda', 'Rasam', 'Pickle', 'Yam Varuval', 'Butter Milk', 'Fryums'],

        "Snacks": ['Pani Poori (or) Chenna', 'Sundal', 'Tea / Coffee'],

        "Dinner": ['Millet Sweet (or) Kasari', 'Chole Pattora', 'Chole Masala', 'Steamed Rice', 'Tomato Dal', 'Idly', 'Sambar', 'Coconut chutney', 'Idly Podi', 'Oil', 'Rasam', 'Pickle Fryums', 'Veg Salad', 'Milk', 'Banana','Mutton Gravy']
    },

    "Friday": {
        "Breakfast": ['Bread', 'Butter', 'Jam', 'Chappathi', 'Rajma Masala', 'Dosa', 'Idly Podi', 'Oil', 'Sambar', 'Coconut Chutney / Tomato Chutney', 'Tea/Coffee / Milk'],

        "Lunch": ['Dry Jamun / Bread Halwa', 'Capscum Gobi Curry', 'Dal Tadka', 'Veg Briyani', 'Mix Raihta', 'Bisibelabath Rice', 'Curd Rice', 'Steamed Rice', 'Tomato Rasam', 'Pickle', 'Fryums'],

        "Snacks": ['SambarVada (or) MilletVada', 'Tea / Coffee'],

        "Dinner": ['Millet Chappathi', 'Veg Manchurian/ Gobi Manchurian', 'Veg Fried Rice / Veg Noodles', 'Steamed Rice', 'Dal Maharani Sambar', 'Rasam', 'Pickle Fryums', 'Veg Salad', 'Milk', 'Special Fruits', 'Chicken Gravy'],
    },

    "Saturday": {
        "Breakfast": ['Bread', 'Butter', 'Jam', 'Chappathi', 'Veg Khruma', 'Sambar', 'MilletPongal Vada', 'Chutney', 'Tea/Coffee/ Milk'],

        "Lunch": ['Poori', 'White Peas Curry', 'AlooThindeli', 'Khismiri Pulao', 'Steamed Rice', 'Dal Fry', 'KaraKozhambu', 'Kootu(Cabbage)', 'Rasam', 'Pickle', 'Butter Milk', 'Fryums'],

        "Snacks": ['Cake or Browni', 'Tea / Coffee'],

        "Dinner": ['Panjabi Parantha', 'Potato Fry', 'Steamed Rice', 'Veg jhal Pyaza', 'bagara Dal', 'Idly', 'Idly Podi', 'Oil', 'Chutney', 'Kathamba Sambar', 'Rasam', 'Pickle Fryums', 'Veg Salad', 'Milk', 'Banana', 'Chicken']
    },

    "Sunday": {
        "Breakfast": ['Bread', 'Butter', 'Jam', 'Chole Bhature', 'Chenna Masala', 'Samba RavaUpma', 'Coconut chutney', 'Tea/Coffee/Milk'],

        "Lunch": ['Chapathi', 'Chicken (Pepper/Kadai)', 'Panneer Butter Masala', 'Dal Dhadka', 'Mint', 'Pulao / Steamed Rice', 'Rasam Pickle', 'Mixed Veg Poriyal', 'Butter Milk', 'Fryums'],

        "Snacks": ['Corn/ Bajji With Chutney', 'Tea/Coffee'],

        "Dinner": ['Aloo Paratha', 'Masala Curd', 'Steamed Rice', 'Harra Moong Dal Tadka', 'Kathamba Sambar Poriyal', 'Rasam', 'Pickle', 'Fryums', 'Veg Salad', 'Milk', 'Banana', 'Cone Ice Cream', 'Chicken Gravy']
    }
}

var currentdate = new Date();
let week_day = currentdate.getDay();
var day_time = currentdate.getHours();

let time_day_text = document.querySelector('.time_day_text');
let items_list = document.querySelector('.items_list');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');

let determine_day = () => {
    if (week_day === 0){
        return 'Sunday';

    }else if (week_day === 1){
        return 'Monday';

    }else if (week_day === 2){
        return 'Tuesday';

    }else if (week_day === 3){
        return 'Wednesday';

    }else if (week_day === 4){
        return 'Thursday';

    }else if (week_day === 5){
        return 'Friday';

    }else if (week_day === 6){
        return 'Saturday';
    }
}

let determine_time = () => {
    if (day_time >= 0 && day_time < 10){
        return 'Breakfast';

    }else if (day_time>= 10 && day_time <14){
        return 'Lunch';

    }else if (day_time >= 14 && day_time < 18){
        return 'Snacks';

    }else if (day_time >= 18 && day_time < 21){
        return 'Dinner';

    }else{
        return 'Dinner';
    }
}

let day = determine_day()
let time = determine_time()

let items = '';
let access_items = all_days[day][time]
time_day_text.textContent = (`${day} - (${time})`)

function display_list(lists_items){
    for(let i = 0; i<lists_items.length; i++){
        items += `<li class="list_items_style">${all_days[`${day}`][`${time}`][i]}</li>`
    }
    console.log(items)
    items_list.innerHTML = items; 
    return items
}
display_list(access_items);

let change_meals = ()=>{
    if (day_time >= 0 && day_time < 10){
        day_time = 11;
        return 'Lunch'

    }else if (day_time>= 10 && day_time <14){
        day_time = 15;
        return 'Snacks'

    }else if (day_time >= 14 && day_time < 18){
        day_time = 19;
        return 'Dinner'

    }else if (day_time >= 18 && day_time < 21){
        day_time = 1;
        return 'Breakfast'
    }else{
        day_time = 1;
        return 'Breakfast'
    }
}

forward.addEventListener("click",()=>{
    if (time === 'Dinner') {
        week_day = (week_day + 1) % 7;
    }
    day = determine_day();
    time = change_meals();
    time_day_text.textContent = (`${day} - (${time})`);
    items = '';
    access_items = all_days[day][time];
    display_list(access_items);
});

backward.addEventListener("click", () => {
    if (time === 'Breakfast') {
        week_day = (week_day - 1 + 7) % 7;
    }
    day = determine_day();
    time = change_meals();
    time_day_text.textContent = (`${day} - (${time})`);
    items = '';
    access_items = all_days[day][time];
    display_list(access_items);
});
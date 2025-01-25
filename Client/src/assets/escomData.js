import large from './large.png';
import leap from './boy.png';
import range from './range.png';
import shuffle from './shuffle.png';
import sort_descending from './sort-descending.png';
import swap from './swap.png';
import thermometer from './thermometer.png';
import app_store_icon from './app-store.png'
import clc_md from './CalculateFactorial.txt';
import add_icon from './add.png';
import app_icon from './app.png';
import clock_icon from './clock.png';
import SortArrayAscending from '../Pages/Tools/SortArrayAscending';
import GetPrimeOnRange from '../Pages/Tools/ToolsItem/GetPrimeOnRange';
import FindFibonacci from '../Pages/Tools/ToolsItem/FindFibonacci';
import CheckPalindrome from '../Pages/Tools/ToolsItem/CheckPalindrome';
import ReverseString from '../Pages/Tools/ToolsItem/ReverseString';
import FindLargestNumber from '../Pages/Tools/ToolsItem/FindLargestNumber';
import ConvertTemperature from '../Pages/Tools/ToolsItem/ConvertTemperature';
import CheckLeapYear from '../Pages/Tools/ToolsItem/CheckLeapYear';
import whiteboard from '../Pages/Tools/ToolsItem/WhiteBoard';
import AnalogClock from '../Components/AnalogComponent/AnalogComponent';
import youtube_icon from './youtube.png';
import video_icon from './video.png';
import insta_icon from './instagram.png';
import facebook_icon from './facebook.png';
import whatsapp_icon from './whatsapp.png';
import slide_one from './TRoc Tools (1).png'
import slide_two from './TRoc Tools (2).png'
import slide_three from './TRoc Tools (3).png'
import slide_four from './TRoc Tools (4).png'
import slide_five from './TRoc Tools (5).png'
import slide_six from './TRoc Tools.png';
import slide_right from './slide-right.png';
import slide_left from './swipe-left.png';
import user_icon from './user.png'
import GenerateRandomNumbers from '../Pages/Tools/GenerateRandomNumbers';
import NumberGuessing from '../Pages/Tools/GamesItem/NumberGuessing';
import GenerateRandomArray from '../Pages/Tools/ToolsItem/GenerateRandomArray';
import TodoList from '../Pages/Tools/ToolsItem/TodoList';
import RockPaperScissor from '../Pages/Tools/ToolsItem/RockPaperScissor';
import CrudOperation from '../Pages/Tools/GamesItem/CrudOperation';


export const assets = {
  large,
  leap,
  range,
  shuffle,
  sort_descending,
  swap,
  thermometer,
  clc_md,
  youtube_icon,
  video_icon, 
  insta_icon,
  whatsapp_icon,
  facebook_icon,
  slide_one,
  slide_two,
  slide_three,
  slide_four,
  slide_five,
  slide_six,
  app_store_icon,
  add_icon,
  app_icon,
  slide_left,
  slide_right,
  user_icon
};

export const escomData = [
  {
    _id: "1",
    name: "Get prime numbers between the range.",
    nickname: "Prime",
    category: "basic",
    image: range,
    url: GetPrimeOnRange
  },
  {
    _id: "2",
    name: "White board.",
    nickname: "Calc",
    category: "basic",
    image: sort_descending,
    url: whiteboard
  },
  {
    _id: "3",
    name: "Find Fibonacci sequence.",
    nickname: "Fibo",
    category: "basic",
    image: shuffle,
    url: FindFibonacci
  },
  {
    _id: "4",
    name: "Check if a number is palindrome.",
    nickname: "Pali",
    category: "basic",
    image: swap,
    url: CheckPalindrome
  },
  {
    _id: "5",
    name: "Sort an array in ascending order.",
    nickname: "Ascending",
    category: "basic",
    image: large,
    url: SortArrayAscending
  },
  {
    _id: "6",
    name: "Reverse a string.",
    nickname: "Reverse",
    category: "basic",
    image: leap,
    url: ReverseString
  },
  {
    _id: "7",
    name: "Find largest number in an array.",
    nickname: "Large",
    category: "basic",
    image: large,
    url: FindLargestNumber
  },
  {
    _id: "8",
    name: "Convert temperature units.",
    nickname: "Temp",
    category: "basic",
    image: thermometer,
    url: ConvertTemperature
  },
  {
    _id: "9",
    name: "Check if a year is a leap year.",
    nickname: "Leap",
    category: "basic",
    image: leap,
    url: CheckLeapYear
  },
  {
    _id: "10",
    name: "Generate random numbers.",
    nickname: "Random",
    category: "basic",
    image: range,
    url: GenerateRandomNumbers  
  },
  {
    _id: "11",
    name: "Analogue Clock",
    nickname: "Clock",
    category: "basic",
    image: clock_icon,
    url: AnalogClock 
  },
  {
    _id: "12",
    name: "Number guessing game",
    nickname: "Number Guess",
    category: "basic",
    image: add_icon,
    url: NumberGuessing 
  },
  {
    _id: "13",
    name: "Random array generating",
    nickname: "Random Array",
    category: "basic",
    image: app_icon,
    url: GenerateRandomArray 
  },
  {
    _id: "14",
    name: "Todo List",
    nickname: "Todo",
    category: "basic",
    image: app_icon,
    url: TodoList 
  },
  {
    _id: "15",
    name: "Rock paper scissor",
    nickname: "Rock Paper",
    category: "basic",
    image: add_icon,
    url: RockPaperScissor 
  },
  {
    _id: "16",
    name: "CRUD Operation",
    nickname: "Crud",
    category: "intermideate",
    image: app_store_icon,
    url: CrudOperation 
  }
];

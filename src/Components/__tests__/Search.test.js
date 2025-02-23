import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../BodyCompo"
import MOCK_DATA from "../mocks/mockRestListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("should search res list for burger text input",async ()=>{
    await act(async () => render(
   <BrowserRouter> <Body/></BrowserRouter>
))
const cardsBeforeSearch = screen.getAllByTestId("resCard")
        expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn=screen.getByRole("button",{name:"Search"})
    // console.log(searchBtn)
    expect(searchBtn).toBeInTheDocument()  

    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, {target:{value:"burger"}})
    fireEvent.click(searchBtn)
    //screen should load 1 cards
    const cardsAfterSearch=screen.getAllByTestId("resCard")
    // console.log(searchInput)
    expect(cardsAfterSearch.length).toBe(1)
})

it("Should Filter Top Restro",async ()=>{
    await act(async ()=>render(
    <BrowserRouter> <Body/></BrowserRouter>   
))
const cardsBeforefilter = screen.getAllByTestId("resCard")
expect(cardsBeforefilter.length).toBe(20)

const topsearchbtn = screen.getByRole("button",{name:"Top Restro"})
fireEvent.click(topsearchbtn)

const cardsAfterfilter = screen.getAllByTestId("resCard")
expect(cardsAfterfilter.length).toBe(4)
})
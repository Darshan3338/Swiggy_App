import { render,screen } from "@testing-library/react"
import RestroCardsCompo from "../RestroCardsCompo"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render RestaurantCard Component with props Data",()=>{
    render(<RestroCardsCompo CardsData={MOCK_DATA}/>)
    const name=screen.getByText("Subway")
    
    expect(name).toBeInTheDocument()
})
// it("should render RestaurantCard Component with promoted label",()=>{
//     render(<withPromotedlabel CardsData={MOCK_DATA}/>)
//     const label = screen.getByText("promoted")
//     expect(label).toBeInTheDocument()
// })
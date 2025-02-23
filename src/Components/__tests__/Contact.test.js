

import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us Page Test Cases",()=>{

    // beforeAll(()=>{
    //     console.log("Before All")
    // })
    // beforeEach(()=>{
    //     console.log("Before Each")
    // })
    // afterAll(()=>{
    //     console.log("After All")
    // })
    // afterEach(()=>{
    //     console.log("After Each")
    // })
    
it("Should load heading inside Contact Us component",()=>{

    render(<Contact/>)
   const heading = screen.getByRole("heading")
   expect(heading).toBeInTheDocument()
})

test("Should load button inside Contact Us component",()=>{
    render(<Contact/>)
    const btn=screen.getByRole("button")
    expect(btn).toBeInTheDocument()
})
test("Should load button inside Contact Us component",()=>{
    render(<Contact/>)
    const btn=screen.getByText("Submit")
    expect(btn).toBeInTheDocument()
})
test("Should load input name inside Contact Component",()=>{
    render(<Contact/>)
    const placeholder = screen.getByPlaceholderText("name")

    //Assertion
    expect(placeholder).toBeInTheDocument()
})
test("Should load 2 input boxes on the Contact Component",()=>{
    render(<Contact/>)
    const inputbox=screen.getAllByRole("textbox")
    // console.log(inputbox.length)
    //Assertion
})
test("Should load 2 input boxes on the Contact Component",()=>{
    render(<Contact/>)
    const inputbox=screen.getAllByRole("textbox")
    // console.log(inputbox.length)
    //Assertion
    expect(inputbox.length).toBe(2)
})
})

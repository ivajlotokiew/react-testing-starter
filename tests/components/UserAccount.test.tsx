import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
    it("should render Edit btn if user is admin", () => {
        const user = {
            id: 22,
            name: 'Ivan',
            isAdmin: true,
        };

        render(<UserAccount user={user} />)
        screen.debug()

        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent('Edit')

    });

    it("should render user name regardless of whether the user is admin or not", () => {
        const user = {
            id: 22,
            name: 'Ivan',
            isAdmin: true,
        };

        render(<UserAccount user={user} />)

        //Get element in the virtual DOM that contains the exact text
        const searchedElement = screen.getByText('User Profile');
        //Show the element
        screen.debug(searchedElement)

        const name = screen.getByRole('user-name')
        expect(name).toBeInTheDocument();
        expect(name).toHaveTextContent('Name: ' + user.name)

    });
});

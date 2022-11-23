import Candidates from "./pages/candidates";
import EnterpriseProfile from "./pages/enterprise-profile";
import JobVacancies from "./pages/job-vacancies";
import UserProfile from "./pages/user-profile";
import {render, screen, fireEvent} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom'

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve([]),
        })
})

afterAll(() => {
    global.fetch = unmockedFetch
})

describe('Candidates Component', () => {
    test('should render menu header link buttons', () => {

        const { getByText } = render(<Router> <Candidates /> </Router>);
        expect(getByText('Perfil')).toBeInTheDocument();
        expect(getByText('Vagas')).toBeInTheDocument();
        expect(getByText('Chat')).toBeInTheDocument();
        expect(getByText('Logout')).toBeInTheDocument();
    
    })
})


describe('JobVacancies Component', () => {
    test('should render menu header link buttons', () => {

        const { getByText } = render(<Router> <JobVacancies /> </Router>);
        expect(getByText('Perfil')).toBeInTheDocument();
        expect(getByText('Vagas')).toBeInTheDocument();
        expect(getByText('Chat')).toBeInTheDocument();
        expect(getByText('Logout')).toBeInTheDocument();
    
    })
})

describe('UserProfile Component', () => {
    test('should render menu header link buttons', () => {

        const { getByText } = render(<Router> <UserProfile /> </Router>);
        expect(getByText('Perfil')).toBeInTheDocument();
        expect(getByText('Vagas')).toBeInTheDocument();
        expect(getByText('Chat')).toBeInTheDocument();
        expect(getByText('Logout')).toBeInTheDocument();
    
    })
})

describe('EnterpriseProfile Component', () => {
    test('should render menu header link buttons', () => {

        const { getByText } = render(<Router> <EnterpriseProfile /> </Router>);
        expect(getByText('Perfil')).toBeInTheDocument();
        expect(getByText('Candidatos')).toBeInTheDocument();
        expect(getByText('Chat')).toBeInTheDocument();
        expect(getByText('Logout')).toBeInTheDocument();
    
    })
})
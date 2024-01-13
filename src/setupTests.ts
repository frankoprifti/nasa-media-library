// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { MockedAnimation } from './__mocks__/MockedAnimation';
import { MockedLottie } from './__mocks__/MockedLottie';
import { ImageData } from './entities';

jest.mock("./context/AppContext");
jest.mock("./api");
jest.mock("axios", () => ({
    get: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

jest.mock("react-lottie", () => MockedLottie);
jest.mock("./components/global/Animation/Animation", () => MockedAnimation);

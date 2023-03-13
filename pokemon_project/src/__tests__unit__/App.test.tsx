import {describe, it , expect} from "vitest";
import TestRenderer from 'react-test-renderer';
import App from "../App";

describe("App", () => {

    it("create html snapshot", () => {
        const app = TestRenderer.create(<App />)
        expect(app).toMatchSnapshot();
    })

})
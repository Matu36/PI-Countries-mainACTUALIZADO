
import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_ID
    } from "../actions/types";
    

describe("types", () => {
    it("Debería declarar y exportar las variables GET_ALL_COUNTRIES y GET_COUNTRY_BY_ID", () => {
      expect(GET_ALL_COUNTRIES).toBeDefined();
      expect(GET_COUNTRY_BY_ID).toBeDefined();
      expect(GET_ALL_COUNTRIES).toEqual("GET_ALL_COUNTRIES");
      expect(GET_COUNTRY_BY_ID).toEqual("GET_COUNTRY_BY_ID");
    });

    });

       
      



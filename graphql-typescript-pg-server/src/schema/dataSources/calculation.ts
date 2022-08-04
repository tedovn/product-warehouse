import { RESTDataSource } from "apollo-datasource-rest";

interface CalculationProps {
  num1: number;
  num2: number;
}

class CalculationAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'http://localhost:3010/calculator';
  }

  async sum(props: CalculationProps) {
    const { num1, num2 } = props;
    return await this.post(`/add`, {
      num1,
      num2
    });
  }

  async subtract(props: CalculationProps) {
    const { num1, num2 } = props;
    return await this.post(`/subtract`, {
      num1,
      num2
    });
  }

  async multiply(props: CalculationProps) {
    const { num1, num2 } = props;
    return await this.post(`/multiply`, {
      num1,
      num2
    });
  }

  async divide(props: CalculationProps) {
    const { num1, num2 } = props;
    return await this.post(`/divide`, {
      num1,
      num2
    });
  }
}

export default CalculationAPI;
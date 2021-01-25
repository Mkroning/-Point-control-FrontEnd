import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import PermissionComponent from '../../components/PermissionComponent';
import api from '../../services/api'
// import { Container } from './styles';

interface Employee {
  id: string;
  name: string;
  description: string;
}

const List: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeData[]>([] as EmployeeData[]);

  const history = useHistory();

  useEffect(() => {
    api.get("employee").then((response) => setEmployees(response.data));
  }, []);
  return(
    <div>
      <h3>Listagem de Funcinários</h3>

      <div>
        {employees.map((employee) => (
          <div key={employee.id}>
            <span>ID: {employee.id}</span>
            <br />
            <span>Nome: {employee.name}</span>
            <br />
            <span>Descrição: {employee.description}</span>
            <br />
            <span>Horário Entrada: {employee.timeEntry}</span>
            <br />
            <span>Horário Saída: {employee.timeDeparture}</span>
            <PermissionComponent role="ROLE_ADMIN">
              <button onClick={() => history.push("/employee")}>
                Cadastrar Funcinário
              </button>
            </PermissionComponent>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

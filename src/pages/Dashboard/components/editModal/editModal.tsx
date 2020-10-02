import moment from "moment";
import React, { useEffect, useState } from "react";
import { MdClose, MdEventNote } from "react-icons/md";
import {
  Box,
  Container,
  Fields,
  Header,
  MuiTable,
  MuiTableBody,
  MuiTableCell,
  MuiTableHead,
  MuiTableRow,
  MuiTextField,
  Separator,
  TableData,
  Wrapper,
} from "./styles";
import { IEditModalProps, iObjectData } from "./interfaces";

export const EditModal: React.FC<IEditModalProps> = ({ data, rowSelected, closeEdit }) => {
  const [eventDate, setEventDate] = useState<Date | string>("");
  const [ip, setIp] = useState<string>("");
  const [stationUser, setStationUser] = useState<string>("");
  const [executable, setExecutable] = useState<string>("");
  const [operationStatus, setOperationStatus] = useState<string>("");
  const [observation, setObservation] = useState<string>("");
  moment.locale();

  const handleRowSelected = () => {
    if (typeof rowSelected === "number" && data) {
      const dataRow: iObjectData = data[rowSelected];
      setExecutable(dataRow.nomeExecutavel);
      setEventDate(dataRow.dataEvento);
      setIp(dataRow.ip);
      setOperationStatus(dataRow.statusOperacao);
      setStationUser(dataRow.nomeHostUsuario);
      setEventDate(moment(dataRow.dataEvento).format("L"));
    }
  };

  useEffect(() => {
    handleRowSelected();
  });

  return (
    <Container>
      <Header>
        <Box>
          <div>
          <MdEventNote color="#cdcdcd" size={40} />
          </div>
          <p>Detalhar <br />evento</p>
        </Box>
        <MdClose onClick={closeEdit} size={20} />
      </Header>

      <Separator first />

      <Fields>
        <span>
          <Wrapper>
            <MuiTextField
              variant="filled"
              label="Data do Evento"
              disabled
              InputLabelProps={{
                shrink: true
              }}
              value={eventDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEventDate(e.target.value)}
            />
            <MuiTextField
              variant="filled"
              label="IP"
              disabled
              value={ip}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIp(e.target.value)}
            />
          </Wrapper>
          <MuiTextField
            variant="filled"
            label="Executável"
            disabled
            value={executable}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExecutable(e.target.value)}
          />
        </span>

        <span>
          <MuiTextField
            variant="filled"
            label="Nome da Estação do Usuário"
            disabled
            value={stationUser}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStationUser(e.target.value)}
          />
          <Wrapper>
            <MuiTextField
              variant="filled"
              label="Status da Operação"
              disabled
              value={operationStatus}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOperationStatus(e.target.value)}
            />
            <MuiTextField
              variant="filled"
              label="Observações"
              disabled
              value={observation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setObservation(e.target.value)}
            />
          </Wrapper>
        </span>
      </Fields>
      <Separator />

      <TableData>
        <MuiTable aria-label="simple table">
          <MuiTableHead>
            <MuiTableRow>
              <MuiTableCell header>Parâmetros</MuiTableCell>
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            <MuiTableRow>
            <MuiTableCell></MuiTableCell>
            </MuiTableRow>

            <MuiTableRow>
            <MuiTableCell></MuiTableCell>
            </MuiTableRow>

            <MuiTableRow>
            <MuiTableCell></MuiTableCell>
            </MuiTableRow>

            <MuiTableRow>
            <MuiTableCell></MuiTableCell>
            </MuiTableRow>
          </MuiTableBody>
        </MuiTable>

        <MuiTable aria-label="simple table">
          <MuiTableHead>
            <MuiTableRow>
              <MuiTableCell header>Valor</MuiTableCell>
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            <MuiTableRow>
            <MuiTableCell></MuiTableCell>
            </MuiTableRow>

            <MuiTableRow>
            <MuiTableCell></MuiTableCell>
            </MuiTableRow>

            <MuiTableRow>
            <MuiTableCell></MuiTableCell>
            </MuiTableRow>

            <MuiTableRow>
            <MuiTableCell></MuiTableCell>
            </MuiTableRow>

          </MuiTableBody>
        </MuiTable>
      </TableData>

    </Container>
  );
};
import { Dialog } from "@reach/dialog";
import { FormControl, Form, FormLabel, Button } from "react-bootstrap";

import "@reach/dialog/styles.css";
import { useState } from "react";

const AddInviteeDialog = (props) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleAddInviteeSubmit = () => {
    const list = {
      nome: name,
      celular: phone,
      email: email,
      senhas: pass,
    };

    props[0].listaConvidados.push(list);
    props.onDismiss();
  };

  return (
    <Dialog
      isOpen={props.isOpen}
      onDismiss={props.onDismiss}
      aria-labelledby="label"
    >
      <Form onSubmit={handleAddInviteeSubmit} className="p-3 m-3">
        <h4>Adicionar novo convidado</h4>
        <FormLabel>Nome</FormLabel>
        <FormControl onChange={(e) => setName(e.target.value)} type="text" />
        <FormLabel>Celular</FormLabel>
        <FormControl onChange={(e) => setPhone(e.target.value)} type="number" />
        <FormLabel>Email</FormLabel>
        <FormControl onChange={(e) => setEmail(e.target.value)} type="email" />
        <FormLabel>Qtd. de senhas</FormLabel>
        <FormControl onChange={(e) => setPass(e.target.value)} type="number" />
        <Button className="my-3" type="submit">
          Salvar
        </Button>
        <Button
          variant="danger"
          className="m-3"
          onClick={() => props.onDismiss()}
        >
          Cancelar
        </Button>
      </Form>
    </Dialog>
  );
};

export default AddInviteeDialog;

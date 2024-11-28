import { ContainerButton } from "./styles";
import PropTypes from "prop-types";

export function Button({children, ...props}){
    return(
        <ContainerButton{...props}>
            {children}

        </ContainerButton>
    )
}

Button.propTypes = {
    children: PropTypes.string, //declara o tipo do botao para texto
};
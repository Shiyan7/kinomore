import {ButtonBase} from "@/UI/ButtonBase/ButtonBase";
import {useActions} from "@/hooks/useActions";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {FiMenu, FiX} from "react-icons/fi";
import styles from './Burger.module.scss';

export const Burger = () => {

    const {openedMenu} = useTypedSelector(state => state.toggleReducer)
    const {toggleMenu} = useActions()

    const handleOpen = () => toggleMenu(!openedMenu)

    return (
        <ButtonBase
            className={styles.burger}
            onClick={handleOpen}
        >
            {openedMenu ? <FiX /> : <FiMenu /> }
        </ButtonBase>
    )
}

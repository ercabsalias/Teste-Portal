import * as S from './styles'
import { ModalProps } from './types';

const CancelModal:React.FC<ModalProps>=({
    showModal,
    setShowModal
})=>{ 
    return(
        <S.Container showModal={showModal}>
            <S.Form>
                <h2>Pretende Cancelar ?</h2>
                <p>Pretende cancelar a sua inscrição? se cancelares não poderás prosseguir com o pocesso!</p>
                <S.Footer>
                    <S.CancelButton onClick={()=>setShowModal(!showModal)}>
                        Cancelar
                    </S.CancelButton>
                    <S.ContinueButton>
                        Ok                        
                    </S.ContinueButton>
                </S.Footer>
            </S.Form>
        </S.Container>
    )
}
export default CancelModal;
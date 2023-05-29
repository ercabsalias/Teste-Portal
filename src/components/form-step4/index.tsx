import * as S from './styles'
import Input from "../input"
import { FaCheck } from 'react-icons/fa'

const FormStep3=()=>{
    return(
        <S.WrapperContainer>
            <S.FormCard>
                <S.Paragraph>
                    Parabéns você terminou de preencher o formulário 
                    de inscrição online no portal das escolas! desejámos-lhe boa sorte!
                </S.Paragraph>
                <S.Forms>
                    <div>
                        <FaCheck/>
                    </div>
                </S.Forms>
            </S.FormCard>
        </S.WrapperContainer>       
    )
}
export default FormStep3
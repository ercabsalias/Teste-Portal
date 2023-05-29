import {useState} from "react"
import * as S from "./styles"
import CancelModal from "../cancelModal";
import Step from "../../components/step";
import FormStep3 from "../../components/form-step4";
import { StepOne } from "../../components/form-step1";
import { StepTwo } from "../../components/form-step2";

const StudentSubscription = () => {
    const [data,setData]=useState({
        
    });

    const [currentStep,setCurrentStep] = useState(0);
    const [showModal,setShowModal]=useState<boolean>(false);

    const handleNextStep = (newData:any) =>{
        setData(prev =>({...prev,...newData}))
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData:any) =>{
        setData(prev =>({...prev,...newData}))
        setCurrentStep(prev => prev - 1)
    }

    const steps=[
        <StepOne next={handleNextStep} data={data} key={1}/>,
        <StepTwo next={handleNextStep} prev={handlePrevStep} setCurrentStep={setCurrentStep} data={data} key={2}/>,
        <FormStep3 key={3}/>
    ]

    return(
        <S.Container>
            <CancelModal showModal={showModal} setShowModal={setShowModal} />
            <S.CardBackground>
                <S.CenterContent>
                    <h2>Fazer Inscrição de estudante</h2>
                    <span>Aderir</span>
                    <Step step={currentStep + 1} />
                </S.CenterContent>
            </S.CardBackground>
            <S.WrapperContainer>
                {steps[currentStep]}
            </S.WrapperContainer>
        </S.Container>
    )
}
    
export default StudentSubscription;

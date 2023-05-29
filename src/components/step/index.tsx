import { FaCheck} from "react-icons/fa";
import * as S from "./styles";
import { StepProps } from "./type";

const Step: React.FC<StepProps> = ({ step }) => {
  return (
    <S.IconsContainer step={step}>
      <div>
        <div>
          <div>1</div>
          -------------
        </div>
      </div>
      <div>
        <div>
          <div>2</div>
          -------------
        </div>
      </div>
      <div>
        <div>
          <div>
            <FaCheck />
          </div>
        </div>
      </div>
    </S.IconsContainer>
  );
};

export default Step;

import Container from "@material-ui/core/Container";
import PorftolioCard from "./PortfolioCard";
import DayPlanner from "../assets/day-planner.png"

export default function Portfolio() {
  return (
    <Container>
      <div>
        <PorftolioCard title="Day Planner" image={DayPlanner}/>
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
    </Container>
  )
}
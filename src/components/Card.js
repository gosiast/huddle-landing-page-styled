import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
	return (
		//if id is even then switch
		<StyledCard layout={id % 2 === 0 && "row-reverse"}>
			{" "}
			<div>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div>
				<img src={`./images/${image}`} alt="" />
			</div>
		</StyledCard>
	);
}

import { dateFormat } from "@/utils/DateFormat";

export default function DataFormatada(props) {
    return(
        <p>Time that this message was published {dateFormat(props.date_time)}</p>
    )
}
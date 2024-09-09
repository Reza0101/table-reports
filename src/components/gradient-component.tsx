import formatPercentage from "../helpers/function"

const GradientComponent = ({ value, hoverColl, hoverRow, index, indexParent, data }: { value: number, hoverColl: number | null, hoverRow: number | null, index: number, indexParent: number, data: any }) => {

    let gradient = ""

    if (indexParent + 1 === data.length) {
        const percentages: any = (value) * 100 / 9;
        gradient = `rgba(0, 255, 0,${percentages / 100})`;
    }
    if (hoverColl === index) {
        if (value > 0) {
            const percentages: any = (Math.abs(value)) * 100 / 9;
            gradient = `rgba(0, 255, 0,${percentages / 100})`;}
        if (value < 0) {
            const percentages: any = (Math.abs(value)) * 100 / 9;
            gradient = `rgba(255, 0, 0,${percentages / 100})`;
        }
    }
    if (hoverRow === indexParent) {
        if (value > 0) {
            const percentages: any = (Math.abs(value)) * 100 / 9;
            gradient = `rgba(0, 255, 0,${percentages / 100})`;}
        if (value < 0) {
            const percentages: any = (Math.abs(value)) * 100 / 9;
            gradient = `rgba(255, 0, 0,${percentages / 100})`;
        }
    }
    if (hoverColl == null && hoverRow == null) {
        if (value < 0) {
            const percentages: any = (Math.abs(value)) * 100 / 9;
            gradient = `rgba(255, 0, 0,${percentages / 100})`;
        } 
        if (value > 0) {
            const percentages: any = (Math.abs(value)) * 100 / 9;
            gradient = `rgba(0, 255, 0,${percentages / 100})`;
        }
    }

    return (
        <p
            style={{ background: gradient, direction: "ltr" }}
            className={`text-center rounded-md border border-border-primary transition-colors h-10 flex items-center duration-300 px-6`}>
            {formatPercentage(value)}
        </p>
    )
}

export default GradientComponent;
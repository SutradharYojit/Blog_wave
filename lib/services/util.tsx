
export class Utils {
    // Function to formatting the coming date from database into => 10/11/2023
    formatDate(timestamp: string): string {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString();
        return formattedDate;
    }
}
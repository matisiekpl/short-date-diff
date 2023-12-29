module.exports = function (date, secondDate = new Date()) {
    const diffTime = Math.abs(secondDate - date);
    const seconds = Math.ceil(diffTime / (1000));
    if (seconds < 1) {
        return `now`;
    }
    if (seconds < 60) {
        return `${seconds}s`;
    }
    const minutes = Math.ceil(diffTime / (1000 * 60));
    if (minutes < 60) {
        return `${minutes}m`;
    }
    const hours = Math.ceil(diffTime / (1000 * 60 * 60));
    if (hours < 48) {
        return `${hours}h`;
    }
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (days < 100) {
        return `${days}d`;
    }
    const months = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    if (months < 24) {
        return `${months}mo`;
    }
    const years = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30 * 12));
    return `${years}y`;
}
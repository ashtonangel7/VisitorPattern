interface IVisitor<T> {
	Visit(objectToVisit: T): void;
}

export { IVisitor };
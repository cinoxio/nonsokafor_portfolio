import { createRef, useEffect, useState } from "react";

function useRefArray<S>(length: number) {
	const [refs, setRefs] = useState<React.RefObject<S>[]>([]);

	useEffect(() => {
		setRefs((refs) =>
			Array(length)
				.fill(0)
				.map((_, i) => refs[i] || createRef<S>())
		);
	}, [length]);
	return refs;
}

export default useRefArray;

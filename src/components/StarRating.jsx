export default function StarRating({ rating, size = 18 }) {
    return (
        <div style={{ display: 'flex', gap:'2px' }}>
            {[...Array(5)].map((_, i) => (
                <svg
                key={i}
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={i < rating ? '#facc15' : 'none'}
                stroke="#facc15"
                strokeWidth="1.5"
                className="mt-3">

                <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 17 5.5 21 7.5 13.5 2 9 9 9"/>
                </svg>
            ))}
        </div>
    )
}
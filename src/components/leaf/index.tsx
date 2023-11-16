import './leaf.css'
function FallenLeaves() {
    const nudeColors = ['#585123', '#eec170', '#f2a65a', '#f58549', '#772f1a']
    return (
        <div className="fallen-leaves">
            {Array.from({ length: 30 }, (_, index) => (
                <div
                    key={index}
                    className="leaf"
                    style={{
                    left: `${Math.random() * 100}vw`,
                    animationDuration: `${Math.random() * 3 + 5}s`,
                    animationDelay: `${Math.random()}s`,
                    }}
                >
                    <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    {/* You can replace the path data with your desired leaf shape */}
                        <path
                            d="M2 4.5C2 4.5 3.34315 2 8 2C12.6569 2 14 4.5 14 4.5C14 4.5 12.6569 7 8 7C3.34315 7 2 4.5 2 4.5Z"
                            fill={nudeColors[Math.floor(Math.random() * (5 - + 1))]} // Leaf color
                        />
                    </svg>
                </div>
            ))}
        </div>
    )
}

export default FallenLeaves
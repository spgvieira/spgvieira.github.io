import { colors, SvgIcon, SvgIconProps } from "@material-ui/core";

type SocialMediaButtonProps = {
	href: string;
	icon: string | React.ElementType<SvgIconProps>;
	label: string;
	alt?: string;
	download?: string;
};

const link = {
	color: '#2D4160',
}

const iconStyle = {
	fontSize: '250%',
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
	href,
	icon,
	alt,
	download,
}) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
            download={download ? download : undefined}
			style={link}
		>
			{typeof icon === "string" ? (
				<img src={icon} alt={alt} />
			) : (
				<SvgIcon component={icon} style={iconStyle}/>
			)}
		</a>
	);
};

export default SocialMediaButton;
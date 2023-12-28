/**
 * Primary content area within the <InterfaceSkeleton />.
 *
 * @return WPComponent
 */

import Button from "../../OnboardingSPA/components/Button";

const AiPageGenerator = () => {

	return (
		<div style={{padding: "16px 48px 16px 16px", textAlign: 'center'}}>
			<h2>AI Page Generator</h2>
			<Button text='Regenerate Content'/>
		</div>
	);
};

export default AiPageGenerator;

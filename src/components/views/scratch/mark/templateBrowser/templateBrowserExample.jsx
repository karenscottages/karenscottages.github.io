import React from 'react';
import { TemplateBrowser, TemplateViewer } from '/ami/templates/components';

const TemplateBrowserExample = () => {
    const [templatePath, setTemplatePath] = React.useState("");

    return <div className="container is-fluid">
        <div className="section columns">

            <div className="column is-4">
                <TemplateBrowser onSelectFile={setTemplatePath} />
            </div>
            <div className="column">
                <div className="columns is-multiline">
                    <div className="column is-full">
                        <TemplateViewer templatePath={templatePath} />
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

// All scratch pages should provide a path like this:
TemplateBrowserExample.path = "/scratch/mark/templateBrowser";
TemplateBrowserExample.menuName = "Template Browser";

export { TemplateBrowserExample };

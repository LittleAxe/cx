import { Content, LabelsLeftLayout } from 'cx/ui';
import { HtmlElement, DateField } from 'cx/widgets';
import {Md} from '../../components/Md';
import {CodeSplit} from '../../components/CodeSplit';
import {CodeSnippet} from '../../components/CodeSnippet';
import {ConfigTable} from '../../components/ConfigTable';
import {ImportPath} from '../../components/ImportPath';


import configs from './configs/DateField';

export const DateFields = <cx>
   <Md>
      # Date Field

      <ImportPath path="import {DateField} from 'cx/widgets';" />

      Date field control is used for selecting dates. It supports textual input and picking
      from a dropdown.

      <CodeSplit>

         <div class="widgets">
            <div layout={LabelsLeftLayout}>
               <DateField label="Standard" value:bind="$page.date" format="yyyyMMMMdd" autoFocus />
               <DateField label="Disabled" value:bind="$page.date" disabled />
               <DateField label="Readonly" value:bind="$page.date" readOnly />
               <DateField label="Placeholder" value:bind="$page.date" placeholder="Type something here..." />
            </div>
            <div layout={LabelsLeftLayout}>
               <DateField label="Required" value:bind="$page.date" required />
               <DateField label="Styled" value:bind="$page.date" inputStyle={{border: '1px solid green'}} icon="drop-down"/>
               <DateField label="View" value:bind="$page.date" mode="view" />
               <DateField label="EmptyText" value:bind="$page.date" mode="view" emptyText="N/A" />
            </div>
         </div>

         <Content name="code">
            <CodeSnippet>{`
               <div layout={LabelsLeftLayout}>
                  <DateField label="Standard" value:bind="$page.date" format="yyyyMMMMdd" autoFocus/>
                  <DateField label="Disabled" value:bind="$page.date" disabled />
                  <DateField label="Readonly" value:bind="$page.date" readOnly />
                  <DateField label="Placeholder" value:bind="$page.date" placeholder="Type something here..." />
               </div>
               <div layout={LabelsLeftLayout}>
                  <DateField label="Required" value:bind="$page.date" />
                  <DateField label="Styled" value:bind="$page.date" inputStyle={{border: '1px solid green'}} icon="drop-down"/>
                  <DateField label="View" value:bind="$page.date" mode="view" />
                  <DateField label="EmptyText" value:bind="$page.date" mode="view" emptyText="N/A" />
               </div>
            `}</CodeSnippet>
         </Content>
      </CodeSplit>

      ## Configuration

      <ConfigTable props={configs} />

   </Md>
</cx>
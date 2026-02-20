import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';
import { Widget } from '@lumino/widgets';

const extension: JupyterFrontEndPlugin<void> = {
  id: '@jupyterlab-stop-server:plugin',
  description: 'Stop Server Button for JupyterLab',
  autoStart: true,
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    const { commands, shell } = app;
    const command = 'stop-server';

    commands.addCommand(command, {
      label: 'Stop Server',
      caption: 'Stop the JupyterLab server',
      execute: async (args: any) => {
        window.location.href = '/hub/home';
      }
    });

    const stopButton = new Widget();
    stopButton.id = 'stop-server-button-widget';
    stopButton.node.textContent = 'Stop Server';
    stopButton.addClass('stop-server-button');
    stopButton.node.onclick = () => {
      commands.execute(command);
    };

    shell.add(stopButton, 'top', { rank: 1000 });
  }
};

export default extension;

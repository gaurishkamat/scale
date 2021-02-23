import { newSpecPage } from '@stencil/core/testing';
import { Table } from './table';
describe('Table', () => {
  let element;

  beforeEach(async () => {
    element = new Table();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: `
      <scale-table>
        <div>Table header</div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Time</th>
              <th>Euros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>University of Plymouth</td>
              <td>00:00:20</td>
              <td>100.245,10</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td />
              <td />
              <td>00:00:20</td>
              <td>100.245,10</td>
            </tr>
          </tfoot>
        </table>
      </scale-table>
      `,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.size = 'big';
    expect(element.getCssClassMap()).toContain('table--size-big');
  });
});

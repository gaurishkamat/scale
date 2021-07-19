const SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
  <g fill="none" fill-rule="evenodd">
    <path fill="#000" d="M6.38523 14.552279c.150294.135405.254064.23266.574711.537255.314066.298317.465945.439273.604827.557209.057919.048785.1073.17925.126864.373163.016097.159556.010495.337534-.00902.509025-.006749.059308-.013258.102088-.016987.12247-.041866.228794.132492.440122.365073.44248.209297.002122.370566.00472.797414.012327.106798.001901.106798.001901.213952.003765 1.160291.01996 1.752906.01448 2.178223-.039003.454622-.05716.922821-.606189 1.327547-1.295122.342944.609603.81865 1.204878 1.299013 1.282277.1526.024374.33721.031937.551177.027015.159526-.00367.328349-.014185.498719-.029407.128474-.01148.230837-.023018.291982-.030947.225912-.029295.373734-.251595.31337-.471255-.01304-.047447-.03399-.134505-.055118-.244107-.024493-.127062-.042193-.251164-.050238-.364219-.0051-.071677-.006106-.13657-.002864-.19267.005637-.097781.007395-.152538.010133-.279047.001046-.047094.001046-.047094.002443-.088308.00529-.134881.02341-.262953.082047-.542224.02519-.12121.14729-.353169.339586-.640233.057273-.085499.119881-.174782.186966-.266959.127207-.174786.264121-.3514.401085-.520404.082046-.101238.145472-.176962.180797-.218076.29622-.424403.612084-1.11917.72814-1.525364.111416-.390401.20054-1.109375.255307-1.816044.030014-.400888.041121-.724054.041121-1.230976.00005-.088918.00005-.088918.000203-.162347.000286-.120252.000303-.16574-.000089-.221952-.00107-.15358-.005547-.305801-.020388-.694025-.031919-.813652-.4778-1.339692-1.13487-1.441158-.558987-.08632-1.239385.377957-1.239385.377957s-.15144-.522812-.25372-.684207c-.166195-.259348-.594174-.589828-.921344-.654211-.336502-.065342-.735403-.058116-1.10172.006674-.320794.057405-.640348.343827-.825187.652772-.132238.220395-.00787-.011691-.140131-.239678-.183056-.314024-.60933-.595224-1.015246-.678223-.343964-.071126-.738019-.044037-1.097956.062938-.46304.138364-.536753.490732-.555167.389846-.061587-.338239-.067275-.31601-.105656-.557296-.14258-.895275-.302132-1.514736-.544062-2.055283.013916.031077-.08861-.202148-.125923-.282568-.06461-.139254-.129105-.265296-.199996-.386522-.218504-.37365-.468913-.65341-.783091-.81234-.54561-.276293-1.363418-.14183-1.751056.31065-.38496.449667-.449143 1.201492-.352196 2.13184.037023.361212.166786 1.02066.28445 1.508123.041605.16919.078059.32349.144915.608514.011497.048484.011497.048484.023095.09698.051722.215719.097076.3932.151223.587963-.005681-.020303.097015.344086.118888.42473.007277.026915.007277.026915.014483.053953.040829.15378.080741.319593.1431.59631.034126.152144.067425.314686.099998.48699.088835.46993.089274.372074.003758.271862-.059073-.069225-.11463-.132093-.168306-.190037-.09977-.107702-.191485-.196772-.278557-.267814-.634398-.519053-1.02313-.748394-1.55682-.79878-.875415-.084102-1.706197.534266-1.831115 1.368827-.076827.511696-.052077.747233.184635 1.199427.130263.244328.350608.539422.761728 1.047354.02516.031068.02516.031068.050304.062065.504645.621867.559621.690954.679615.864737.324354.470685 1.11395 1.822146 1.257486 2.003588l.84783.93972z"/>
    <path fill="#FFF" d="M4.18267 10.27164c-.024887-.030677-.024887-.030677-.049706-.061325-.377292-.466138-.58418-.74321-.681563-.92585-.152817-.291952-.161131-.371075-.106058-.737886.064734-.432475.531816-.780134 1.018296-.733398.336605.03178.630685.20528 1.153397.632953.056594.046176.124828.112442.202882.196702.046166.049836.095132.105245.148001.1672.07941.093056.347029.420522.307615.372869.058142.069916.099718.124077.147216.19045.094106.134341.147051.208947.21875.304545-.033617-.044871.21473.298433.267322.348633.278598.265935.682032.041959.65676-.312448-.00422-.059165-.018128-.123084-.04718-.234668-.114874-.819238-.155057-1.082183-.246782-1.5674-.034074-.180245-.069054-.350987-.105212-.51219-.064354-.285572-.106357-.460072-.149947-.624255-.007748-.02907-.007748-.02907-.015524-.057831-.023006-.08482-.127251-.454703-.120308-.42989-.051344-.184681-.094546-.35374-.14432-.561336-.01131-.04729-.01131-.04729-.0226-.0949-.066492-.283509-.10388-.44176-.14606-.613272-.109987-.455677-.234254-1.087195-.267104-1.40768-.075466-.72422-.023393-1.334185.175823-1.566888.155549-.181567.59641-.254053.842718-.129325.161075.081482.322043.261316.47435.52177.057644.098571.111728.204267.167085.323577.033525.072257.132925.29837.121729.273367.210322.469924.3548 1.030868.487917 1.866715.039395.247662.088137.528235.15064.871504.018578.101788.018578.101788.037229.203144.301392 1.635336.279338 1.511394.28367 1.641825.015807.47578.718106.486926.749003.011887.009799-.150653.00631-.285166-.011078-.671465-.002455-.054653-.002455-.054653-.004819-.109102-.015215-.355904-.014337-.560667.006706-.677057.038347-.212231.22887-.449978.404347-.502413.246419-.073236.516404-.091796.7327-.04707.207037.042334.448646.201717.517962.320624.083537.143998.15516.363374.210061.635305.044312.21948.074805.454935.096254.706242.006673.07819.01103.138599.017722.238547.00285.041836.00285.041836.00569.076352.001603.017315.001603.017315.005512.044674.003035.019173.003035.019173.017342.067736.007276.137823.007276.137823.560816.188931.165302-.199827.165302-.199827.160772-.234864.027081-.11835.043653-.250265.067279-.498137.01508-.161124.022685-.240336.031574-.3225.036794-.34012.083516-.556215.14051-.651206.070716-.118194.319785-.28281.431497-.3028.280535-.049617.588606-.055198.826463-.009012.107735.021202.370543.22414.43275.32121.127729.201562.251962.851382.32192 1.496118-.011013.042289-.011013.042289.160715.287604.590341-.067303.590341-.067303.573757-.173892.015574-.037992.027967-.081916.045507-.150138.042195-.159707.070172-.25244.111827-.35636.028817-.071889.059194-.133354.09034-.182278.120675-.18993.433088-.318963.70706-.276656.294254.04544.481757.26665.499893.728968.014542.38043.018844.52668.019845.67023.000369.052968.000353.09549.000072.215096-.000154.073913-.000154.073913-.000205.163974 0 .488924-.010469.793533-.038954 1.174003-.050629.653266-.136106 1.342816-.228649 1.667085-.094456.330596-.376459.950883-.599746 1.273498-.01584.015302-.083806.096447-.170694.20366-.144591.178415-.289233.364997-.424811.551286-.072563.099704-.140705.19688-.203677.290885-.24367.363756-.400022.660787-.450625.904283-.066437.316419-.09018.484242-.097317.666188-.001742.051516-.001742.051516-.002843.101474-.002555.118056-.004086.165727-.009063.252057-.00524.09067-.003744.18718.00351.289119.010388.145992 0 .345481 0 .345481s-.126633-.01183-.267855-.008581c-.172518.003968-.315986-.001909-.41513-.017744-.143046-.023049-.52935-.50645-.72715-.883061-.30227-.576423-1.03605-.548443-1.336843-.039406-.271302.461813-.659653.917208-.774934.931702-.374605.047106-.954711.05247-2.071755.033255-.106795-.001857-.106795-.001857-.213488-.003757-.428897-.007644-.412415.064766-.403633-.012408.02507-.220307.022223-.179031 0-.3993-.037262-.36933-.151254-.670498-.38877-.870543-.12287-.104342-.269831-.240734-.565008-.52111-.337224-.32034-.442837-.419323-.572991-.533726l-.801305-.890719c-.087958-.112479-.860023-1.433935-1.212486-1.945407-.137108-.198572-.188396-.263024-.714614-.911474zm9.50873.00376v3.459c0 .5.75.5.75 0v-3.459c0-.5-.75-.5-.75 0zm-2.031596-.000572l.016 3.473c.002303.499994.752295.49654.749992-.003456l-.016-3.473c-.002303-.499994-.752295-.49654-.749992.003456zM10.450693 13.7284l-.021-3.426c-.003065-.49999-.75305-.495393-.749986.004598l.021 3.426c.003065.49999.75305.495393.749986-.004598z"/>
  </g>
</svg>
`;

const placeCursor = (
  target,
  { top = 'auto', left = 'auto', right = 'auto', bottom = 'auto' }
) => {
  const parser = new DOMParser();
  const cursor = parser
    .parseFromString(SVG, 'image/svg+xml')
    .querySelector('svg');

  cursor.style.position = 'absolute';
  cursor.style.top = top;
  cursor.style.left = left;
  cursor.style.right = right;
  cursor.style.bottom = bottom;

  target.append(cursor);
};

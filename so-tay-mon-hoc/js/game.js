(function (global) {
  'use strict';

  const parser =
    global.MDParser ||
    (typeof require === 'function' ? require('./md-parser.js') : null);

  const DEFAULT_QUIZ_MD = `# Trạm Cân Hài Hòa Lợi Ích

- role: Nhà Quản Lý Thể Chế
- initial_a: 50
- initial_b: 50
- pan_a_name: Đĩa Động Lực
- pan_a_subtitle: Thị Trường
- pan_a_desc: Đại diện cho phương thức phân phối theo nguyên tắc thị trường (phân phối theo kết quả lao động, hiệu quả kinh tế và mức đóng góp vốn, tài sản, công sức). Đây là động lực trực tiếp tạo ra lợi nhuận, tiền công và làm chiếc bánh kinh tế to ra.
- pan_b_name: Đĩa Cân Bằng
- pan_b_subtitle: An Sinh Xã Hội
- pan_b_desc: Đại diện cho phương thức phân phối theo chính sách của Nhà nước và các tổ chức xã hội (thuế điều tiết, trợ cấp, an sinh xã hội, phúc lợi). Đây là vế đảm bảo tăng trưởng kinh tế đi đôi với tiến bộ và công bằng xã hội.
- risk_a: Nền kinh tế phát triển nóng, chạy theo hiệu quả thuần túy, dẫn đến phân hóa giàu nghèo quá mức, bỏ quên người yếu thế.
- risk_b: Triệt tiêu động lực phấn đấu, rơi vào bẫy phân phối cào bằng như thời kỳ kế hoạch hóa tập trung trước đổi mới.
- goal: Đóng vai "Nhà Quản Lý Thể Chế", đưa ra các quyết định điều tiết để giữ cán cân ở Trạng Thái Hài Hòa (cân bằng hoàn hảo).

---

## Câu 1
**Tình huống:** Doanh nghiệp Y áp dụng dây chuyền tự động hóa giúp tăng năng suất lao động 150%. Giám đốc đề xuất dồn toàn bộ lợi nhuận tăng thêm để chia thưởng cho cổ đông sở hữu vốn, giữ nguyên tiền công người lao động.
**Câu hỏi:** Để giữ cán cân không bị lệch về phía chủ doanh nghiệp, Nhà quản lý thể chế cần điều chỉnh thế nào?
- [A] (+38A, +0B) Giữ nguyên đề xuất của Giám đốc.
- [B*] (+10A, +10B) Yêu cầu phân phối lại khoản lợi ích gia tăng: trích một phần tăng tiền công/tiền thưởng cho công nhân và trích thuế doanh nghiệp vào quỹ phúc lợi.
- [C] (+0A, +52B) Tịch thu toàn bộ phần lợi nhuận gia tăng chuyển thẳng vào ngân sách nhà nước.
- [D] (+0A, +60B) Cấm doanh nghiệp áp dụng tự động hóa để bảo vệ việc làm.
**Giải thích:** Lợi ích gia tăng cần được chia sẻ hài hòa: người lao động hưởng theo đóng góp (tiền công, thưởng), Nhà nước điều tiết qua thuế để bổ sung quỹ phúc lợi, doanh nghiệp vẫn giữ động lực đầu tư đổi mới.

## Câu 2
**Tình huống:** Trong nền kinh tế xuất hiện một số cá nhân làm giàu rất nhanh từ hoạt động kinh doanh công nghệ, trong khi lao động phổ thông ở nông thôn gặp khó khăn do thiên tai.
**Câu hỏi:** Quyết định phân phối nào giúp bảo đảm tăng trưởng kinh tế gắn liền với tiến bộ và công bằng xã hội?
- [A*] (+10A, +10B) Áp thuế thu nhập lũy tiến hợp lý đối với người thu nhập cao để trích lập quỹ an sinh xã hội, trợ cấp cho vùng thiên tai.
- [B] (+0A, +58B) Áp thuế cực cao 90% để không ai giàu hơn ai.
- [C] (+49A, +0B) Miễn toàn bộ thuế cho người giàu để họ tự do tích lũy vốn.
- [D] (+43A, +0B) Để thị trường tự điều chỉnh, người dân vùng thiên tai tự lo liệu.
**Giải thích:** Thuế lũy tiến hợp lý vừa điều tiết thu nhập, vừa tạo nguồn cho an sinh xã hội, mà không triệt tiêu động lực làm giàu chính đáng.

## Câu 3
**Tình huống:** Phát hiện một nhóm lợi ích cấu kết thao túng giá đất đai, gây bóp méo thị trường và đẩy chi phí nhà ở lên quá cao so với thu nhập của đại đa số người dân.
**Câu hỏi:** Nhà nước phải thực hiện vai trò gì để bảo vệ cán cân hài hòa?
- [A] (+41A, +0B) Bỏ qua vì cho rằng đất đai tăng giá là do quy luật cung cầu tự do.
- [B*] (+10A, +10B) Sử dụng thể chế pháp lý để kiểm soát, ngăn ngừa và xử lý nghiêm hành vi lũng đoạn của nhóm lợi ích tiêu cực, bảo vệ lợi ích công cộng.
- [C] (+0A, +57B) Cấm toàn bộ giao dịch bất động sản tư nhân.
- [D] (+33A, +0B) Phát hành thêm tiền để người dân có tiền mua nhà.
**Giải thích:** Nhà nước phải dùng pháp luật để ngăn chặn, xử lý nhóm lợi ích tiêu cực, giữ thị trường minh bạch, lành mạnh và bảo vệ lợi ích công cộng.

## Câu 4
**Câu hỏi:** Vì sao nền kinh tế cần kết hợp cả phân phối theo thị trường và phân phối theo chính sách của Nhà nước?
- [A] (+48A, +0B) Vì thị trường luôn tự bảo đảm công bằng cho mọi người.
- [B] (+0A, +44B) Vì chỉ cần Nhà nước phân phối là đủ để kinh tế tăng trưởng.
- [C*] (+10A, +10B) Vì thị trường tạo động lực và hiệu quả nhưng tự nó dễ gây phân hóa, cần chính sách Nhà nước bổ sung công bằng.
- [D] (+0A, +24B) Vì hai phương thức này luôn loại trừ nhau.
**Giải thích:** Hai phương thức bổ sung cho nhau: thị trường tạo động lực, hiệu quả; chính sách Nhà nước khắc phục phân hóa, bảo đảm tiến bộ và công bằng xã hội.

## Câu 5
**Tình huống:** Địa phương X trợ cấp tiền mặt như nhau cho mỗi hộ, bất kể thu nhập hay mức đóng góp. Nhiều lao động giỏi bắt đầu giảm giờ làm vì “làm ít cũng được hưởng bằng nhau”.
**Câu hỏi:** Nhà quản lý thể chế nên điều chỉnh thế nào?
- [A] (+0A, +36B) Tăng mức trợ cấp để mọi người hài lòng.
- [B] (+54A, +0B) Xóa bỏ hoàn toàn trợ cấp.
- [C] (+0A, +29B) Giữ nguyên, vì bình quân là công bằng nhất.
- [D*] (+10A, +10B) Chuyển sang trợ cấp có mục tiêu cho nhóm yếu thế, đồng thời thưởng theo hiệu quả và năng suất lao động.
**Giải thích:** Trợ cấp tràn lan, cào bằng làm mất động lực. Cần trợ cấp đúng đối tượng yếu thế và khuyến khích theo năng suất, hiệu quả lao động.

## Câu 6
**Tình huống:** Phân loại các hình thức thu nhập.
**Câu hỏi:** Lợi tức cổ phần và lợi nhuận từ vốn đầu tư kinh doanh thuộc phương thức phân phối nào?
- [A*] (+10A, +10B) Phân phối theo nguyên tắc thị trường, dựa trên mức đóng góp vốn và tài sản.
- [B] (+0A, +27B) Phân phối theo chính sách an sinh xã hội.
- [C] (+0A, +42B) Phân phối bình quân theo đầu người.
- [D] (+0A, +18B) Phân phối theo thuế điều tiết của Nhà nước.
**Giải thích:** Lợi tức, lợi nhuận là thu nhập theo đóng góp vốn và tài sản vào sản xuất kinh doanh, thuộc phân phối theo nguyên tắc thị trường.

## Câu 7
**Tình huống:** Khủng hoảng kinh tế: nhiều doanh nghiệp thu hẹp sản xuất, thu ngân sách giảm, một bộ phận lao động mất việc.
**Câu hỏi:** Chính sách nào giúp phục hồi mà vẫn giữ hài hòa lợi ích?
- [A] (+0A, +31B) Tăng thuế doanh nghiệp để bù ngân sách.
- [B*] (+10A, +10B) Vừa hỗ trợ phục hồi sản xuất kinh doanh, vừa mở rộng bảo hiểm thất nghiệp và đào tạo lại lao động.
- [C] (+56A, +0B) Mặc kệ thị trường tự điều chỉnh.
- [D] (+0A, +46B) Phát tiền mặt không điều kiện kéo dài cho mọi người.
**Giải thích:** Cần hỗ trợ kép: giữ năng lực sản xuất của doanh nghiệp và bảo đảm an sinh, đào tạo lại cho người lao động.

## Câu 8
**Tình huống:** Một số doanh nghiệp trốn thuế và nợ bảo hiểm xã hội của người lao động, làm hụt nguồn quỹ an sinh.
**Câu hỏi:** Nhà nước cần làm gì?
- [A] (+40A, +0B) Chỉ khuyến khích tự nguyện, không xử phạt.
- [B] (+0A, +51B) Tăng thuế riêng với doanh nghiệp tuân thủ đúng pháp luật.
- [C*] (+10A, +10B) Tăng cường thanh tra, xử lý vi phạm, buộc nộp đủ thuế và đóng bảo hiểm xã hội.
- [D] (+0A, +55B) Đóng cửa mọi doanh nghiệp có sai phạm.
**Giải thích:** Thực thi pháp luật nghiêm minh giúp bảo vệ nguồn quỹ an sinh và môi trường cạnh tranh công bằng, không triệt tiêu doanh nghiệp làm ăn chính đáng.`;

  /**
   * Harmony Score = max(0, 100 - |scoreA - scoreB|).
   */
  function computeHarmony(scoreA, scoreB) {
    return Math.max(0, 100 - Math.abs(scoreA - scoreB));
  }

  /**
   * Compute beam tilt angle in degrees.
   * Positive angle rotates clockwise (right pan / Đĩa B drops).
   * Negative angle rotates counter-clockwise (left pan / Đĩa A drops).
   */
  function computeTiltAngle(scoreA, scoreB) {
    const raw = (scoreB - scoreA) * 0.35;
    return Math.max(-24, Math.min(24, Number(raw.toFixed(2))));
  }

  /**
   * Final institutional classification at the end of the 8-question session.
   */
  function classifyState(scoreA, scoreB, correctCount = 0, totalQuestions = 8) {
    const diff = scoreA - scoreB;
    const absDiff = Math.abs(diff);

    if (absDiff === 0 && correctCount === totalQuestions) {
      return {
        code: 'perfect',
        title: 'Trạng Thái Hài Hòa Hoàn Hảo',
        tone: 'harmony',
        badge: 'Cân bằng tuyệt đối',
        description:
          'Bạn đã điều tiết xuất sắc cả 8 tình huống thể chế: giữ vững động lực thị trường của Đĩa A song hành cùng an sinh và công bằng xã hội ở Đĩa B.'
      };
    }

    if (absDiff <= 15) {
      return {
        code: 'balanced',
        title: 'Trạng Thái Hài Hòa Ổn Định',
        tone: 'harmony',
        badge: 'Cân bằng ổn định',
        description:
          'Cán cân thể chế giữ được sự ổn định giữa tăng trưởng kinh tế và tiến bộ xã hội, chênh lệch hai đĩa nằm trong biên độ an toàn.'
      };
    }

    if (diff > 60) {
      return {
        code: 'severe-a',
        title: 'Mất Cân Bằng Nghiêm Trọng — Lệch Mạnh Về Thị Trường',
        tone: 'danger-a',
        badge: 'Rủi ro phân hóa sâu sắc',
        description:
          'Đĩa A nặng vượt ngưỡng an toàn: nền kinh tế chạy theo hiệu quả thuần túy, làm gia tăng phân hóa giàu nghèo quá mức và bỏ quên nhóm yếu thế.'
      };
    }

    if (diff > 15) {
      return {
        code: 'lean-a',
        title: 'Thiên Lệch Về Đĩa A — Động Lực Thị Trường',
        tone: 'warn-a',
        badge: 'Thiên về tăng trưởng thuần túy',
        description:
          'Thị trường được ưu tiên hơn chính sách điều tiết, tiềm ẩn nguy cơ nới rộng khoảng cách thu nhập nếu thiếu công cụ an sinh bù đắp.'
      };
    }

    if (diff < -60) {
      return {
        code: 'severe-b',
        title: 'Mất Cân Bằng Nghiêm Trọng — Rơi Vào Bẫy Cào Bằng',
        tone: 'danger-b',
        badge: 'Rủi ro triệt tiêu động lực',
        description:
          'Đĩa B quá nặng so với Đĩa A: can thiệp hành chính và phân phối bình quân quá mức dễ triệt tiêu động lực sáng tạo, quay lại bẫy cào bằng.'
      };
    }

    return {
      code: 'lean-b',
      title: 'Thiên Lệch Về Đĩa B — An Sinh & Hành Chính',
      tone: 'warn-b',
      badge: 'Thiên về điều tiết hành chính',
      description:
        'Chính sách an sinh và can thiệp của Nhà nước lấn át động lực thị trường, có thể làm giảm sức cạnh tranh và hiệu quả phân bổ nguồn lực.'
    };
  }

  /**
   * Live status badge and theoretical note during gameplay.
   */
  function getLiveBalanceStatus(scoreA, scoreB, meta) {
    const diff = scoreA - scoreB;
    const absDiff = Math.abs(diff);

    if (absDiff === 0) {
      return {
        code: 'harmony',
        label: 'Cân bằng hoàn hảo',
        tone: 'harmony',
        note: 'Đĩa A và Đĩa B đang ngang bằng — động lực thị trường song hành cùng công bằng xã hội.'
      };
    }

    if (absDiff <= 15) {
      return {
        code: 'stable',
        label: diff > 0 ? 'Ổn định (hơi nghiêng Đĩa A)' : 'Ổn định (hơi nghiêng Đĩa B)',
        tone: 'harmony',
        note: 'Độ lệch nhỏ trong ngưỡng an toàn. Tiếp tục giữ hài hòa hai phương thức phân phối.'
      };
    }

    if (diff > 60) {
      return {
        code: 'danger-a',
        label: 'Báo động: Lệch mạnh sang Đĩa A',
        tone: 'danger-a',
        note:
          (meta && meta.riskA) ||
          'Nền kinh tế phát triển nóng, chạy theo hiệu quả thuần túy, dẫn đến phân hóa giàu nghèo quá mức, bỏ quên người yếu thế.'
      };
    }

    if (diff > 15) {
      return {
        code: 'warn-a',
        label: 'Cảnh báo: Nghiêng sang Đĩa A',
        tone: 'warn-a',
        note:
          (meta && meta.riskA) ||
          'Nền kinh tế có xu hướng chạy theo hiệu quả thuần túy; cần bổ sung chính sách điều tiết để tránh bỏ quên người yếu thế.'
      };
    }

    if (diff < -60) {
      return {
        code: 'danger-b',
        label: 'Báo động: Lệch mạnh sang Đĩa B',
        tone: 'danger-b',
        note:
          (meta && meta.riskB) ||
          'Triệt tiêu động lực phấn đấu, rơi vào bẫy phân phối cào bằng như thời kỳ kế hoạch hóa tập trung trước đổi mới.'
      };
    }

    return {
      code: 'warn-b',
      label: 'Cảnh báo: Nghiêng sang Đĩa B',
      tone: 'warn-b',
      note:
        (meta && meta.riskB) ||
        'Can thiệp điều tiết đang lấn át động lực thị trường; lưu ý tránh rơi vào xu hướng phân phối cào bằng.'
    };
  }

  function esc(str) {
    return parser ? parser.escapeHtml(str) : String(str ?? '');
  }

  /**
   * Generate small brass/slate weight markers inside each SVG pan based on score.
   */
  function renderPanWeightsMarkup(score, tone) {
    const count = Math.max(1, Math.min(7, Math.round(score / 28)));
    const fill = tone === 'a' ? '#D97E41' : '#3B7EA3';
    const stroke = tone === 'a' ? '#8A3F16' : '#18445E';
    const positions = [
      [-14, 71],
      [0, 71],
      [14, 71],
      [-8, 63],
      [8, 63],
      [0, 55],
      [-18, 63]
    ];

    let out = '';
    for (let i = 0; i < count; i += 1) {
      const [cx, cy] = positions[i];
      out += `<rect x="${cx - 6}" y="${cy}" width="12" height="7" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="1.1"></rect>`;
    }
    return out;
  }

  /**
   * Build the custom SVG Balance Scale markup.
   * Left pan = Đĩa A (Thị Trường), Right pan = Đĩa B (An Sinh).
   */
  function buildScaleSvgMarkup(scoreA, scoreB, idsPrefix, animate) {
    const angle = computeTiltAngle(scoreA, scoreB);
    const beamClass = animate ? 'scale-beam-anim' : '';
    const panClass = animate ? 'pan-hang-anim' : '';
    const needleClass = animate ? 'scale-needle-anim' : '';

    return `
      <svg class="scale-svg" viewBox="0 0 420 265" role="img" aria-label="Cán cân thể chế kinh tế: Đĩa A ${scoreA} điểm, Đĩa B ${scoreB} điểm">
        <defs>
          <linearGradient id="${idsPrefix}-brass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E2BA64"></stop>
            <stop offset="50%" stop-color="#C29238"></stop>
            <stop offset="100%" stop-color="#8C641C"></stop>
          </linearGradient>
          <linearGradient id="${idsPrefix}-navy" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#223E66"></stop>
            <stop offset="100%" stop-color="#12233B"></stop>
          </linearGradient>
          <linearGradient id="${idsPrefix}-pan-a" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#D4743B"></stop>
            <stop offset="100%" stop-color="#9B4719"></stop>
          </linearGradient>
          <linearGradient id="${idsPrefix}-pan-b" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#357496"></stop>
            <stop offset="100%" stop-color="#1D4D68"></stop>
          </linearGradient>
        </defs>

        <!-- Subtle background halo -->
        <circle cx="210" cy="118" r="88" fill="#F2E7D3" opacity="0.55"></circle>

        <!-- Graduated Equilibrium Arc -->
        <path d="M 164 56 A 58 58 0 0 1 256 56" fill="none" stroke="#C8B99E" stroke-width="2.5" stroke-linecap="round"></path>
        <line x1="210" y1="33" x2="210" y2="43" stroke="#1F6E58" stroke-width="2.6" stroke-linecap="round"></line>
        <line x1="184" y1="41" x2="188" y2="48" stroke="#9F8E73" stroke-width="1.6" stroke-linecap="round"></line>
        <line x1="236" y1="41" x2="232" y2="48" stroke="#9F8E73" stroke-width="1.6" stroke-linecap="round"></line>
        <text x="163" y="45" text-anchor="middle" font-size="10" font-weight="700" fill="#B85C28">A</text>
        <text x="210" y="27" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1F6E58">HÀI HÒA</text>
        <text x="257" y="45" text-anchor="middle" font-size="10" font-weight="700" fill="#245C7A">B</text>

        <!-- Ornate Pedestal Base & Pillar -->
        <rect x="136" y="239" width="148" height="14" rx="5" fill="url(#${idsPrefix}-navy)"></rect>
        <rect x="156" y="228" width="108" height="12" rx="4" fill="url(#${idsPrefix}-brass)"></rect>
        <path d="M 202 228 L 205 98 L 215 98 L 218 228 Z" fill="url(#${idsPrefix}-navy)"></path>
        <rect x="200" y="156" width="20" height="6" rx="2" fill="url(#${idsPrefix}-brass)"></rect>
        <rect x="197" y="222" width="26" height="7" rx="2" fill="url(#${idsPrefix}-brass)"></rect>

        <!-- Pivoting Group centered at (210, 96) -->
        <g transform="translate(210, 96)">
          <!-- Needle pointing up toward the equilibrium arc -->
          <g id="${idsPrefix}-needle" class="${needleClass}" style="transform: rotate(${angle}deg);">
            <polygon points="-2.5,0 0,-54 2.5,0" fill="#C29238" stroke="#162A47" stroke-width="0.9"></polygon>
          </g>

          <!-- Main Beam + Counter-rotating Pans -->
          <g id="${idsPrefix}-beam" class="${beamClass}" style="transform: rotate(${angle}deg);">
            <!-- Decorative horizontal crossbeam -->
            <path d="M -126 0 Q -62 -8 0 -4 Q 62 -8 126 0 L 122 6 Q 62 0 0 4 Q -62 0 -122 6 Z" fill="url(#${idsPrefix}-brass)" stroke="#755213" stroke-width="1"></path>
            <circle cx="-122" cy="1" r="4.5" fill="#162A47" stroke="#E2BA64" stroke-width="1.5"></circle>
            <circle cx="122" cy="1" r="4.5" fill="#162A47" stroke="#E2BA64" stroke-width="1.5"></circle>

            <!-- Left Pan Hook: Đĩa A (Thị Trường) -->
            <g transform="translate(-122, 1)">
              <g id="${idsPrefix}-pan-left" class="${panClass}" style="transform: rotate(${-angle}deg);">
                <line x1="0" y1="0" x2="-34" y2="76" stroke="#8C641C" stroke-width="1.7"></line>
                <line x1="0" y1="0" x2="34" y2="76" stroke="#8C641C" stroke-width="1.7"></line>
                <line x1="0" y1="0" x2="0" y2="76" stroke="#C29238" stroke-width="1.1" stroke-dasharray="3 2"></line>
                <g id="${idsPrefix}-weights-a">
                  ${renderPanWeightsMarkup(scoreA, 'a')}
                </g>
                <path d="M -38 76 L 38 76 Q 34 92 0 92 Q -34 92 -38 76 Z" fill="url(#${idsPrefix}-pan-a)" stroke="#7D3711" stroke-width="1.4"></path>
                <rect x="-39" y="74" width="78" height="4" rx="2" fill="#E8AA7E"></rect>
                <text x="0" y="87" text-anchor="middle" font-size="9.5" font-weight="700" fill="#FFF8F0">ĐĨA A</text>
              </g>
            </g>

            <!-- Right Pan Hook: Đĩa B (An Sinh) -->
            <g transform="translate(122, 1)">
              <g id="${idsPrefix}-pan-right" class="${panClass}" style="transform: rotate(${-angle}deg);">
                <line x1="0" y1="0" x2="-34" y2="76" stroke="#8C641C" stroke-width="1.7"></line>
                <line x1="0" y1="0" x2="34" y2="76" stroke="#8C641C" stroke-width="1.7"></line>
                <line x1="0" y1="0" x2="0" y2="76" stroke="#C29238" stroke-width="1.1" stroke-dasharray="3 2"></line>
                <g id="${idsPrefix}-weights-b">
                  ${renderPanWeightsMarkup(scoreB, 'b')}
                </g>
                <path d="M -38 76 L 38 76 Q 34 92 0 92 Q -34 92 -38 76 Z" fill="url(#${idsPrefix}-pan-b)" stroke="#153B52" stroke-width="1.4"></path>
                <rect x="-39" y="74" width="78" height="4" rx="2" fill="#8DC3DF"></rect>
                <text x="0" y="87" text-anchor="middle" font-size="9.5" font-weight="700" fill="#F4FAFD">ĐĨA B</text>
              </g>
            </g>
          </g>

          <!-- Center Pivot Jewel -->
          <circle cx="0" cy="0" r="8.5" fill="#162A47" stroke="#E2BA64" stroke-width="2.5"></circle>
          <circle cx="0" cy="0" r="3" fill="#E2BA64"></circle>
        </g>
      </svg>
    `;
  }

  const LEADERBOARD_CONFIG = {
    // Dán URL Firebase Realtime Database vào đây khi triển khai GitHub Pages (hoặc cấu hình trực tiếp trong giao diện)
    firebaseDatabaseUrl: '',
    storageKey: 'ss008_harmony_leaderboard_v1',
    configKey: 'ss008_firebase_url_override',
    playerSessionKey: 'ss008_current_player_v1'
  };

  function normalizeMssv(raw) {
    return String(raw ?? '').trim().toUpperCase();
  }

  function sanitizeFirebaseKey(mssv) {
    return normalizeMssv(mssv).replace(/[.#$\[\]\/]/g, '_');
  }

  function validatePlayerInfo(fullName, mssv) {
    const cleanName = String(fullName ?? '').trim().replace(/\s+/g, ' ');
    const cleanMssv = normalizeMssv(mssv);
    const errors = { fullName: '', mssv: '' };

    if (cleanName.length < 2) {
      errors.fullName = 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự).';
    } else if (cleanName.length > 80) {
      errors.fullName = 'Họ và tên không vượt quá 80 ký tự.';
    }

    if (cleanMssv.length < 3 || cleanMssv.length > 24) {
      errors.mssv = 'MSSV phải có từ 3 đến 24 ký tự.';
    } else if (!/^[A-Z0-9._-]+$/.test(cleanMssv)) {
      errors.mssv = 'MSSV chỉ gồm chữ cái không dấu, số hoặc ký tự . _ -';
    }

    return {
      valid: !errors.fullName && !errors.mssv,
      errors,
      player: {
        fullName: cleanName,
        mssv: cleanMssv,
        key: sanitizeFirebaseKey(cleanMssv)
      }
    };
  }

  function pad2(n) {
    return n < 10 ? `0${n}` : String(n);
  }

  function formatDuration(ms, showTenths = false) {
    const safeMs = Math.max(0, Number(ms) || 0);
    if (showTenths) {
      const totalTenths = Math.floor(safeMs / 100);
      const tenths = totalTenths % 10;
      const totalSec = Math.floor(totalTenths / 10);
      const mins = Math.floor(totalSec / 60);
      const secs = totalSec % 60;
      return `${pad2(mins)}:${pad2(secs)}.${tenths}`;
    }
    const totalSec = Math.floor(safeMs / 1000);
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${pad2(mins)}:${pad2(secs)}`;
  }

  /**
   * Ranking priority:
   * 1. Highest Harmony Score
   * 2. Highest Optimal Answer Count
   * 3. Fastest Completion Duration (lowest ms)
   * 4. Earliest submission timestamp
   */
  function compareLeaderboardEntries(a, b) {
    const harmonyDiff = (Number(b.harmony) || 0) - (Number(a.harmony) || 0);
    if (harmonyDiff !== 0) return harmonyDiff;

    const correctDiff = (Number(b.correctCount) || 0) - (Number(a.correctCount) || 0);
    if (correctDiff !== 0) return correctDiff;

    const timeDiff = (Number(a.durationMs) || 0) - (Number(b.durationMs) || 0);
    if (timeDiff !== 0) return timeDiff;

    return (Number(a.completedAt) || 0) - (Number(b.completedAt) || 0);
  }

  function escapeCsvField(val) {
    const s = String(val ?? '');
    if (/[",\r\n]/.test(s)) {
      return `"${s.replace(/"/g, '""')}"`;
    }
    return s;
  }

  function formatDateTime(ts) {
    if (!ts) return '';
    try {
      const d = new Date(Number(ts));
      return d.toLocaleString('vi-VN', {
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch (_) {
      return String(ts);
    }
  }

  function buildLeaderboardCsv(sortedEntries) {
    const header = [
      'Hạng',
      'Họ và tên',
      'MSSV',
      'Điểm Hài Hòa',
      'Số câu đúng',
      'Thời gian',
      'Thời gian (ms)',
      'Đĩa A',
      'Đĩa B',
      'Xếp loại',
      'Hoàn thành lúc'
    ];
    const rows = (sortedEntries || []).map((entry, idx) => {
      const rank = entry.rank || idx + 1;
      const correctStr = `${entry.correctCount}/${entry.totalQuestions || 8}`;
      return [
        rank,
        entry.fullName,
        entry.mssv,
        entry.harmony,
        correctStr,
        formatDuration(entry.durationMs, true),
        entry.durationMs,
        entry.scoreA,
        entry.scoreB,
        entry.classificationTitle || entry.classificationCode || '',
        formatDateTime(entry.completedAt)
      ]
        .map(escapeCsvField)
        .join(',');
    });
    return `\uFEFF${header.map(escapeCsvField).join(',')}\r\n${rows.join('\r\n')}`;
  }

  function normalizeFirebaseUrl(rawUrl) {
    const trimmed = String(rawUrl ?? '').trim();
    if (!trimmed) return '';
    let cleaned = trimmed.replace(/\/+$/, '');
    cleaned = cleaned.replace(/\/leaderboard\.json$/i, '').replace(/\/+$/, '');
    const isValidProtocol =
      /^https:\/\/[a-z0-9.-]+/i.test(cleaned) ||
      /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/i.test(cleaned);
    if (!isValidProtocol) return null;
    return cleaned;
  }

  function createMemoryStorage() {
    const map = Object.create(null);
    return {
      getItem: (k) => (Object.prototype.hasOwnProperty.call(map, k) ? map[k] : null),
      setItem: (k, v) => {
        map[k] = String(v);
      },
      removeItem: (k) => {
        delete map[k];
      }
    };
  }

  function resolveDefaultStorage() {
    try {
      if (typeof global.localStorage !== 'undefined' && global.localStorage) {
        return global.localStorage;
      }
    } catch (_) {
      // Ignore storage access restrictions
    }
    return createMemoryStorage();
  }

  function resolveSessionStorage() {
    try {
      if (typeof global.sessionStorage !== 'undefined' && global.sessionStorage) {
        return global.sessionStorage;
      }
    } catch (_) {
      // Ignore storage access restrictions
    }
    return null;
  }

  function createLeaderboardStore(options = {}) {
    const storage = options.storage || resolveDefaultStorage();
    const fetchImpl =
      options.fetchImpl || (typeof global.fetch === 'function' ? global.fetch.bind(global) : null);
    const EventSourceImpl =
      options.EventSourceImpl !== undefined
        ? options.EventSourceImpl
        : typeof global.EventSource === 'function'
          ? global.EventSource
          : null;
    const winObj = options.windowObj !== undefined ? options.windowObj : typeof window !== 'undefined' ? window : null;

    let entriesMap = Object.create(null);
    let freshKeys = new Set();
    let status = 'local'; // 'live' | 'polling' | 'local' | 'error'
    let lastUpdatedAt = null;
    let activePlayerKey = null;
    let eventSource = null;
    let pollTimer = null;
    let storageListener = null;
    let connected = false;
    const listeners = new Set();

    function getConfiguredFirebaseUrl() {
      if (options.firebaseDatabaseUrl !== undefined) {
        return normalizeFirebaseUrl(options.firebaseDatabaseUrl) || '';
      }
      if (winObj && winObj.location && winObj.location.search) {
        try {
          const params = new URLSearchParams(winObj.location.search);
          const fbParam = params.get('fb');
          if (fbParam) {
            const normalized = normalizeFirebaseUrl(fbParam);
            if (normalized) return normalized;
          }
        } catch (_) {
          // Ignore malformed search query
        }
      }
      const configUrl = normalizeFirebaseUrl(LEADERBOARD_CONFIG.firebaseDatabaseUrl);
      if (configUrl) return configUrl;
      try {
        const storedOverride = storage.getItem(LEADERBOARD_CONFIG.configKey);
        const normalized = normalizeFirebaseUrl(storedOverride);
        if (normalized) return normalized;
      } catch (_) {
        // Ignore storage read error
      }
      return '';
    }

    function readLocalMap() {
      try {
        const raw = storage.getItem(LEADERBOARD_CONFIG.storageKey);
        if (!raw) return Object.create(null);
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : Object.create(null);
      } catch (_) {
        return Object.create(null);
      }
    }

    function writeLocalMap(map) {
      try {
        storage.setItem(LEADERBOARD_CONFIG.storageKey, JSON.stringify(map));
      } catch (_) {
        // Ignore storage quota errors
      }
    }

    function sanitizeEntriesMap(rawObj) {
      const next = Object.create(null);
      if (!rawObj || typeof rawObj !== 'object') return next;
      Object.keys(rawObj).forEach((k) => {
        const item = rawObj[k];
        if (item && typeof item === 'object' && item.mssv) {
          next[k] = { ...item, key: item.key || k };
        }
      });
      return next;
    }

    function notify() {
      const snapshot = getSnapshot();
      listeners.forEach((fn) => {
        try {
          fn(snapshot);
        } catch (_) {
          // Never break other subscribers
        }
      });
    }

    function getSortedEntries() {
      return Object.values(entriesMap)
        .filter((e) => e && typeof e === 'object' && e.mssv)
        .sort(compareLeaderboardEntries)
        .map((entry, idx) => ({
          ...entry,
          rank: idx + 1,
          isFresh: freshKeys.has(entry.key || sanitizeFirebaseKey(entry.mssv))
        }));
    }

    function getSnapshot() {
      return {
        entries: getSortedEntries(),
        status,
        firebaseUrl: getConfiguredFirebaseUrl(),
        lastUpdatedAt,
        activePlayerKey
      };
    }

    function stopTimersAndStreams() {
      if (eventSource) {
        try {
          eventSource.close();
        } catch (_) {
          // Ignore close error
        }
        eventSource = null;
      }
      if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
      }
      if (storageListener && winObj && typeof winObj.removeEventListener === 'function') {
        winObj.removeEventListener('storage', storageListener);
        storageListener = null;
      }
    }

    function markFresh(key) {
      if (!key) return;
      freshKeys.add(key);
      if (typeof setTimeout === 'function') {
        setTimeout(() => {
          freshKeys.delete(key);
        }, 4500);
      }
    }

    async function fetchSnapshot() {
      const dbUrl = getConfiguredFirebaseUrl();
      if (!dbUrl || !fetchImpl) {
        entriesMap = readLocalMap();
        status = 'local';
        lastUpdatedAt = Date.now();
        notify();
        return getSnapshot();
      }

      try {
        const res = await fetchImpl(`${dbUrl}/leaderboard.json`);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        const prevKeys = new Set(Object.keys(entriesMap));
        const nextMap = sanitizeEntriesMap(data);
        Object.keys(nextMap).forEach((k) => {
          if (!prevKeys.has(k) && prevKeys.size > 0) {
            markFresh(k);
          }
        });
        entriesMap = nextMap;
        if (status !== 'live') {
          status = eventSource ? 'live' : 'polling';
        }
        lastUpdatedAt = Date.now();
        notify();
      } catch (_) {
        status = 'error';
        notify();
      }
      return getSnapshot();
    }

    function startPolling() {
      if (pollTimer) return;
      status = 'polling';
      notify();
      pollTimer = setInterval(() => {
        fetchSnapshot();
      }, 5000);
    }

    function connectFirebaseStream(dbUrl) {
      if (!EventSourceImpl) {
        startPolling();
        return;
      }

      try {
        const es = new EventSourceImpl(`${dbUrl}/leaderboard.json`);
        eventSource = es;

        es.addEventListener('open', () => {
          if (pollTimer) {
            clearInterval(pollTimer);
            pollTimer = null;
          }
          status = 'live';
          notify();
        });

        es.addEventListener('put', (event) => {
          try {
            const payload = JSON.parse(event.data);
            if (!payload) return;
            if (payload.path === '/') {
              entriesMap = sanitizeEntriesMap(payload.data);
            } else if (typeof payload.path === 'string' && payload.path.startsWith('/')) {
              const seg = payload.path.slice(1).split('/')[0];
              if (seg) {
                if (payload.data === null) {
                  delete entriesMap[seg];
                } else if (typeof payload.data === 'object') {
                  if (!entriesMap[seg]) markFresh(seg);
                  entriesMap[seg] = { ...payload.data, key: payload.data.key || seg };
                }
              }
            }
            status = 'live';
            lastUpdatedAt = Date.now();
            notify();
          } catch (_) {
            // Ignore malformed SSE payload
          }
        });

        es.addEventListener('patch', (event) => {
          try {
            const payload = JSON.parse(event.data);
            if (!payload || payload.path !== '/' || !payload.data || typeof payload.data !== 'object') {
              return;
            }
            Object.keys(payload.data).forEach((k) => {
              const val = payload.data[k];
              if (val === null) {
                delete entriesMap[k];
              } else if (typeof val === 'object') {
                if (!entriesMap[k]) markFresh(k);
                entriesMap[k] = { ...val, key: val.key || k };
              }
            });
            status = 'live';
            lastUpdatedAt = Date.now();
            notify();
          } catch (_) {
            // Ignore malformed SSE patch
          }
        });

        es.addEventListener('error', () => {
          try {
            es.close();
          } catch (_) {
            // Ignore close error
          }
          if (eventSource === es) {
            eventSource = null;
          }
          startPolling();
        });
      } catch (_) {
        startPolling();
      }
    }

    function connect() {
      stopTimersAndStreams();
      connected = true;
      const dbUrl = getConfiguredFirebaseUrl();

      if (!dbUrl) {
        entriesMap = readLocalMap();
        status = 'local';
        lastUpdatedAt = Date.now();
        if (winObj && typeof winObj.addEventListener === 'function') {
          storageListener = (ev) => {
            if (!ev || ev.key === LEADERBOARD_CONFIG.storageKey || ev.key === null) {
              const nextMap = readLocalMap();
              Object.keys(nextMap).forEach((k) => {
                if (!entriesMap[k]) markFresh(k);
              });
              entriesMap = nextMap;
              lastUpdatedAt = Date.now();
              notify();
            }
          };
          winObj.addEventListener('storage', storageListener);
        }
        notify();
        return getSnapshot();
      }

      status = 'polling';
      notify();
      connectFirebaseStream(dbUrl);
      fetchSnapshot();
      return getSnapshot();
    }

    function normalizeRecord(raw) {
      const cleanMssv = normalizeMssv(raw.mssv);
      const key = raw.key || sanitizeFirebaseKey(cleanMssv);
      return {
        key,
        mssv: cleanMssv,
        fullName: String(raw.fullName || '').trim(),
        harmony: Number(raw.harmony) || 0,
        correctCount: Number(raw.correctCount) || 0,
        totalQuestions: Number(raw.totalQuestions) || 8,
        scoreA: Number(raw.scoreA) || 0,
        scoreB: Number(raw.scoreB) || 0,
        durationMs: Math.max(0, Math.round(Number(raw.durationMs) || 0)),
        classificationCode: String(raw.classificationCode || ''),
        classificationTitle: String(raw.classificationTitle || ''),
        completedAt: Number(raw.completedAt) || Date.now()
      };
    }

    function submitLocalRecord(record) {
      const localMap = readLocalMap();
      if (localMap[record.key]) {
        entriesMap = sanitizeEntriesMap(localMap);
        notify();
        return {
          saved: false,
          mode: 'local',
          reason: 'already_recorded',
          existingRecord: localMap[record.key]
        };
      }
      localMap[record.key] = record;
      writeLocalMap(localMap);
      entriesMap = sanitizeEntriesMap(localMap);
      markFresh(record.key);
      lastUpdatedAt = Date.now();
      notify();
      return {
        saved: true,
        mode: 'local',
        record
      };
    }

    async function submitResult(rawRecord) {
      const record = normalizeRecord(rawRecord);
      activePlayerKey = record.key;
      const dbUrl = getConfiguredFirebaseUrl();

      if (!dbUrl || !fetchImpl) {
        return submitLocalRecord(record);
      }

      const itemUrl = `${dbUrl}/leaderboard/${encodeURIComponent(record.key)}.json`;
      try {
        const checkRes = await fetchImpl(itemUrl);
        if (checkRes.ok) {
          const existing = await checkRes.json();
          if (existing && typeof existing === 'object') {
            entriesMap[record.key] = { ...existing, key: existing.key || record.key };
            lastUpdatedAt = Date.now();
            notify();
            return {
              saved: false,
              mode: 'firebase',
              reason: 'already_recorded',
              existingRecord: entriesMap[record.key]
            };
          }
        }

        const putRes = await fetchImpl(itemUrl, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(record)
        });

        if (putRes.ok) {
          entriesMap[record.key] = record;
          markFresh(record.key);
          lastUpdatedAt = Date.now();
          notify();
          return {
            saved: true,
            mode: 'firebase',
            record
          };
        }

        if (putRes.status === 401 || putRes.status === 403) {
          // Re-check whether another client just recorded this MSSV first
          try {
            const recheck = await fetchImpl(itemUrl);
            if (recheck.ok) {
              const existing = await recheck.json();
              if (existing && typeof existing === 'object') {
                entriesMap[record.key] = { ...existing, key: existing.key || record.key };
                notify();
                return {
                  saved: false,
                  mode: 'firebase',
                  reason: 'already_recorded',
                  existingRecord: entriesMap[record.key]
                };
              }
            }
          } catch (_) {
            // Ignore recheck failure
          }

          const localRes = submitLocalRecord(record);
          return {
            ...localRes,
            saved: false,
            mode: 'firebase',
            reason: 'permission_denied',
            error: 'Firebase từ chối quyền ghi. Kiểm tra Realtime Database Rules.'
          };
        }

        throw new Error(`HTTP ${putRes.status}`);
      } catch (_) {
        const localRes = submitLocalRecord(record);
        return {
          ...localRes,
          mode: 'local-fallback',
          warning: 'Không thể kết nối Firebase, tạm lưu cục bộ trên thiết bị này.'
        };
      }
    }

    function setFirebaseUrl(rawUrl) {
      const trimmed = String(rawUrl ?? '').trim();
      if (!trimmed) {
        try {
          storage.removeItem(LEADERBOARD_CONFIG.configKey);
        } catch (_) {
          // Ignore error
        }
        connect();
        return { ok: true, url: '' };
      }

      const normalized = normalizeFirebaseUrl(trimmed);
      if (!normalized) {
        return {
          ok: false,
          url: '',
          error: 'URL Firebase chưa hợp lệ (phải bắt đầu bằng https://...).'
        };
      }

      try {
        storage.setItem(LEADERBOARD_CONFIG.configKey, normalized);
      } catch (_) {
        // Ignore error
      }
      connect();
      return { ok: true, url: normalized };
    }

    function clearLocalData() {
      try {
        storage.removeItem(LEADERBOARD_CONFIG.storageKey);
      } catch (_) {
        // Ignore error
      }
      if (!getConfiguredFirebaseUrl()) {
        entriesMap = Object.create(null);
        freshKeys.clear();
        lastUpdatedAt = Date.now();
        notify();
      }
    }

    function hasMssv(mssv) {
      const key = sanitizeFirebaseKey(mssv);
      return Boolean(key && entriesMap[key]);
    }

    function getEntry(mssv) {
      const key = sanitizeFirebaseKey(mssv);
      return key && entriesMap[key] ? entriesMap[key] : null;
    }

    function setActivePlayerKey(key) {
      activePlayerKey = key || null;
      notify();
    }

    function subscribe(fn) {
      if (typeof fn !== 'function') return () => {};
      listeners.add(fn);
      if (!connected) {
        connect();
      } else {
        fn(getSnapshot());
      }
      return () => {
        listeners.delete(fn);
      };
    }

    return {
      connect,
      disconnect: stopTimersAndStreams,
      fetchSnapshot,
      submitResult,
      setFirebaseUrl,
      clearLocalData,
      hasMssv,
      getEntry,
      getSortedEntries,
      getSnapshot,
      setActivePlayerKey,
      subscribe
    };
  }

  const sharedLeaderboardStore = createLeaderboardStore();

  function getStatusMeta(status) {
    if (status === 'live') {
      return { label: 'Trực tiếp (Firebase)', cls: 'is-live', pulsing: true };
    }
    if (status === 'polling') {
      return { label: 'Đang đồng bộ định kỳ (5s)', cls: 'is-polling', pulsing: true };
    }
    if (status === 'error') {
      return { label: 'Lỗi kết nối Firebase', cls: 'is-error', pulsing: false };
    }
    return { label: 'Chế độ cục bộ (Trình duyệt này)', cls: 'is-local', pulsing: false };
  }

  function renderLeaderboardRowsHtml(entries, activePlayerKey, emptyMessage) {
    if (!entries.length) {
      return `
        <tr>
          <td colspan="7" class="lb-empty-cell">
            <div class="lb-empty-state">
              <p>${esc(emptyMessage || 'Chưa có lượt hoàn thành nào trên bảng xếp hạng.')}</p>
            </div>
          </td>
        </tr>
      `;
    }

    return entries
      .map((entry) => {
        const rank = entry.rank;
        const key = entry.key || sanitizeFirebaseKey(entry.mssv);
        const isCurrent = Boolean(activePlayerKey && key === activePlayerKey);
        const rowCls = [
          'lb-row',
          rank <= 3 ? `is-top-${rank}` : '',
          isCurrent ? 'is-current-player' : '',
          entry.isFresh ? 'is-fresh' : ''
        ]
          .filter(Boolean)
          .join(' ');

        const rankBadge =
          rank === 1
            ? '<span class="rank-medal rank-1" aria-label="Hạng 1">🥇 1</span>'
            : rank === 2
              ? '<span class="rank-medal rank-2" aria-label="Hạng 2">🥈 2</span>'
              : rank === 3
                ? '<span class="rank-medal rank-3" aria-label="Hạng 3">🥉 3</span>'
                : `<span class="rank-num">#${rank}</span>`;

        const toneCls =
          entry.classificationCode === 'perfect' || entry.classificationCode === 'balanced'
            ? 'tone-harmony'
            : entry.classificationCode === 'severe-a' || entry.classificationCode === 'severe-b'
              ? 'tone-danger-a'
              : entry.classificationCode === 'lean-a'
                ? 'tone-warn-a'
                : 'tone-warn-b';

        return `
          <tr class="${rowCls}">
            <td class="col-rank">${rankBadge}</td>
            <td class="col-name">
              <span class="lb-player-name">${esc(entry.fullName)}</span>
              ${isCurrent ? '<span class="you-tag">Bạn</span>' : ''}
            </td>
            <td class="col-mssv"><code>${esc(entry.mssv)}</code></td>
            <td class="col-harmony">
              <strong class="lb-harmony-val">${entry.harmony}</strong><span>/100</span>
            </td>
            <td class="col-correct">${entry.correctCount}/${entry.totalQuestions || 8}</td>
            <td class="col-time">${formatDuration(entry.durationMs, true)}</td>
            <td class="col-state">
              <span class="status-pill ${toneCls}">${esc(entry.classificationTitle || 'Hoàn thành')}</span>
            </td>
          </tr>
        `;
      })
      .join('');
  }

  /**
   * Mount the standalone Live Leaderboard view tab.
   */
  function initLeaderboardView(containerEl, storeOverride) {
    if (!containerEl) return null;
    const store = storeOverride || sharedLeaderboardStore;
    let searchQuery = '';

    const rulesSnippet = `{
  "rules": {
    "leaderboard": {
      ".read": true,
      "$mssv": {
        ".write": "!data.exists()",
        ".validate": "newData.hasChildren(['mssv', 'fullName', 'harmony', 'correctCount', 'durationMs', 'completedAt'])"
      }
    }
  }
}`;

    containerEl.innerHTML = `
      <section class="leaderboard-shell">
        <div class="lb-header card-paper">
          <div class="lb-title-row">
            <div>
              <span class="badge-academic">BẢNG XẾP HẠNG TRỰC TIẾP</span>
              <h2 class="lb-title">Thành Tích Nhà Quản Lý Thể Chế</h2>
              <p class="lb-criteria">
                Thứ tự xếp hạng: <strong>Điểm Hài Hòa cao nhất</strong> → <strong>Số câu đúng cao nhất</strong> → <strong>Thời gian nhanh nhất</strong> • Chỉ ghi nhận <strong>lượt đầu tiên</strong> của mỗi MSSV.
              </p>
            </div>
            <div class="lb-connection-meta">
              <span id="lb-status-pill" class="live-indicator is-local">
                <span class="live-dot" aria-hidden="true"></span>
                <span id="lb-status-text">Đang tải...</span>
              </span>
              <span id="lb-last-sync" class="lb-last-sync"></span>
            </div>
          </div>

          <div class="lb-toolbar">
            <div class="lb-search-wrap">
              <input
                type="search"
                id="lb-search"
                class="lb-search-input"
                placeholder="Tìm theo họ tên hoặc MSSV..."
                aria-label="Tìm kiếm sinh viên theo họ tên hoặc MSSV"
              >
            </div>
            <div class="lb-toolbar-actions">
              <button type="button" id="lb-btn-refresh" class="btn-secondary-game btn-sm">↻ Làm mới</button>
              <button type="button" id="lb-btn-csv" class="btn-secondary-game btn-sm">⬇ Xuất CSV</button>
              <button type="button" id="lb-btn-fb-toggle" class="btn-secondary-game btn-sm" aria-expanded="false">
                ⚙ Kết nối Firebase
              </button>
              <button type="button" id="lb-btn-clear-local" class="btn-ghost-sm btn-danger-ghost" hidden>
                🗑 Xóa dữ liệu cục bộ
              </button>
            </div>
          </div>

          <div id="lb-firebase-drawer" class="lb-firebase-drawer" hidden>
            <div class="fb-drawer-grid">
              <div class="fb-drawer-form">
                <h4>Kết nối Firebase Realtime Database (Đa thiết bị trực tiếp)</h4>
                <p class="fb-help-text">
                  Dán URL Realtime Database để đồng bộ kết quả trực tiếp giữa điện thoại và laptop trong lớp học. Nếu để trống, ứng dụng chạy ở chế độ lưu cục bộ (<code>localStorage</code>).
                </p>
                <div class="fb-input-row">
                  <input
                    type="url"
                    id="lb-fb-url-input"
                    class="lb-fb-input"
                    placeholder="https://ten-project-default-rtdb.asia-southeast1.firebasedatabase.app"
                    aria-label="URL Firebase Realtime Database"
                  >
                  <button type="button" id="lb-btn-fb-save" class="btn-primary-game btn-sm">Lưu &amp; Kết nối</button>
                  <button type="button" id="lb-btn-fb-local" class="btn-secondary-game btn-sm">Dùng cục bộ</button>
                </div>
                <p id="lb-fb-feedback" class="fb-feedback" hidden></p>
              </div>
              <div class="fb-drawer-guide">
                <strong>Hướng dẫn nhanh 3 bước + Rules chống ghi đè MSSV:</strong>
                <ol>
                  <li>Tạo project tại Firebase Console → mở mục <strong>Realtime Database</strong>.</li>
                  <li>Ở tab <strong>Rules</strong>, dán cấu hình bên dưới để chỉ cho phép ghi lượt đầu (<code>!data.exists()</code>).</li>
                  <li>Dán Database URL vào ô bên trái (hoặc gắn cố định vào <code>LEADERBOARD_CONFIG.firebaseDatabaseUrl</code> trong <code>js/game.js</code>).</li>
                </ol>
                <pre class="rules-code-block"><code>${esc(rulesSnippet)}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div id="lb-stats" class="lb-stats-grid"></div>
        <div id="lb-podium" class="lb-podium-wrap"></div>

        <div class="lb-table-card card-paper">
          <div class="lb-table-head">
            <h3>Danh Sách Xếp Hạng <span id="lb-count" class="lb-count-badge">0</span></h3>
            <button type="button" id="lb-btn-go-play" class="btn-ghost-sm">← Quay lại chơi minigame</button>
          </div>
          <div class="lb-table-wrap">
            <table class="lb-table">
              <thead>
                <tr>
                  <th>Hạng</th>
                  <th>Họ và tên</th>
                  <th>MSSV</th>
                  <th>Điểm Hài Hòa</th>
                  <th>Câu đúng</th>
                  <th>Thời gian</th>
                  <th>Trạng thái cân</th>
                </tr>
              </thead>
              <tbody id="lb-table-body"></tbody>
            </table>
          </div>
        </div>
      </section>
    `;

    const searchInput = containerEl.querySelector('#lb-search');
    const refreshBtn = containerEl.querySelector('#lb-btn-refresh');
    const csvBtn = containerEl.querySelector('#lb-btn-csv');
    const fbToggleBtn = containerEl.querySelector('#lb-btn-fb-toggle');
    const clearLocalBtn = containerEl.querySelector('#lb-btn-clear-local');
    const fbDrawer = containerEl.querySelector('#lb-firebase-drawer');
    const fbInput = containerEl.querySelector('#lb-fb-url-input');
    const fbSaveBtn = containerEl.querySelector('#lb-btn-fb-save');
    const fbLocalBtn = containerEl.querySelector('#lb-btn-fb-local');
    const fbFeedback = containerEl.querySelector('#lb-fb-feedback');
    const goPlayBtn = containerEl.querySelector('#lb-btn-go-play');

    let latestSnapshot = store.getSnapshot();

    function renderDynamicParts(snapshot) {
      latestSnapshot = snapshot;
      const entries = snapshot.entries || [];
      const statusMeta = getStatusMeta(snapshot.status);

      const pillEl = containerEl.querySelector('#lb-status-pill');
      const statusTextEl = containerEl.querySelector('#lb-status-text');
      const lastSyncEl = containerEl.querySelector('#lb-last-sync');
      if (pillEl) {
        pillEl.className = `live-indicator ${statusMeta.cls}${statusMeta.pulsing ? ' is-pulsing' : ''}`;
      }
      if (statusTextEl) {
        statusTextEl.textContent = statusMeta.label;
      }
      if (lastSyncEl && snapshot.lastUpdatedAt) {
        lastSyncEl.textContent = `Cập nhật: ${formatDateTime(snapshot.lastUpdatedAt)}`;
      }

      if (clearLocalBtn) {
        clearLocalBtn.hidden = Boolean(snapshot.firebaseUrl);
      }

      if (fbInput && !fbInput.value && snapshot.firebaseUrl) {
        fbInput.value = snapshot.firebaseUrl;
      }

      // Stats
      const statsEl = containerEl.querySelector('#lb-stats');
      if (statsEl) {
        const total = entries.length;
        const avgHarmony = total
          ? Math.round(entries.reduce((s, e) => s + (Number(e.harmony) || 0), 0) / total)
          : 0;
        const perfectCount = entries.filter((e) => e.harmony === 100).length;
        const fastestMs = total
          ? entries.reduce((min, e) => Math.min(min, Number(e.durationMs) || min), entries[0].durationMs)
          : null;

        statsEl.innerHTML = `
          <div class="lb-stat-card card-paper">
            <span>Tổng sinh viên tham gia</span>
            <strong>${total}</strong>
          </div>
          <div class="lb-stat-card card-paper">
            <span>Điểm Hài Hòa trung bình</span>
            <strong>${total ? `${avgHarmony}/100` : '—'}</strong>
          </div>
          <div class="lb-stat-card card-paper">
            <span>Đạt 100 Điểm Hài Hòa</span>
            <strong>${perfectCount}</strong>
          </div>
          <div class="lb-stat-card card-paper">
            <span>Hoàn thành nhanh nhất</span>
            <strong>${fastestMs !== null ? formatDuration(fastestMs, true) : '—'}</strong>
          </div>
        `;
      }

      // Podium (Top 3)
      const podiumEl = containerEl.querySelector('#lb-podium');
      if (podiumEl) {
        const top3 = entries.slice(0, 3);
        if (!top3.length) {
          podiumEl.innerHTML = '';
        } else {
          const medals = ['🥇', '🥈', '🥉'];
          podiumEl.innerHTML = `
            <div class="lb-podium">
              ${top3
                .map((item, idx) => {
                  const isCurrent =
                    snapshot.activePlayerKey &&
                    (item.key || sanitizeFirebaseKey(item.mssv)) === snapshot.activePlayerKey;
                  return `
                    <article class="podium-card card-paper podium-rank-${idx + 1} ${isCurrent ? 'is-current-player' : ''}">
                      <div class="podium-medal">${medals[idx]} Hạng ${idx + 1}</div>
                      <h4 class="podium-name">${esc(item.fullName)}</h4>
                      <span class="podium-mssv">${esc(item.mssv)}</span>
                      <div class="podium-metrics">
                        <span><strong>${item.harmony}</strong>/100 Hài Hòa</span>
                        <span><strong>${item.correctCount}/${item.totalQuestions || 8}</strong> câu đúng</span>
                        <span><strong>${formatDuration(item.durationMs, true)}</strong></span>
                      </div>
                    </article>
                  `;
                })
                .join('')}
            </div>
          `;
        }
      }

      // Filtered table
      const q = searchQuery.trim().toLowerCase();
      const filtered = q
        ? entries.filter(
            (e) =>
              String(e.fullName || '').toLowerCase().includes(q) ||
              String(e.mssv || '').toLowerCase().includes(q)
          )
        : entries;

      const countEl = containerEl.querySelector('#lb-count');
      if (countEl) {
        countEl.textContent = q ? `${filtered.length}/${entries.length}` : String(entries.length);
      }

      const tbodyEl = containerEl.querySelector('#lb-table-body');
      if (tbodyEl) {
        const emptyMsg = q
          ? 'Không tìm thấy sinh viên nào khớp từ khóa tìm kiếm.'
          : 'Chưa có dữ liệu. Hãy là Nhà Quản Lý Thể Chế đầu tiên hoàn thành Trạm Cân!';
        tbodyEl.innerHTML = renderLeaderboardRowsHtml(
          filtered,
          snapshot.activePlayerKey,
          emptyMsg
        );
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value || '';
        renderDynamicParts(latestSnapshot);
      });
    }

    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        store.fetchSnapshot();
      });
    }

    if (csvBtn) {
      csvBtn.addEventListener('click', () => {
        const entries = store.getSortedEntries();
        const csvContent = buildLeaderboardCsv(entries);
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `bang-xep-hang-ss008-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }

    if (fbToggleBtn && fbDrawer) {
      fbToggleBtn.addEventListener('click', () => {
        const nextHidden = !fbDrawer.hidden;
        fbDrawer.hidden = nextHidden;
        fbToggleBtn.setAttribute('aria-expanded', nextHidden ? 'false' : 'true');
      });
    }

    if (fbSaveBtn && fbInput && fbFeedback) {
      fbSaveBtn.addEventListener('click', () => {
        const res = store.setFirebaseUrl(fbInput.value);
        fbFeedback.hidden = false;
        if (res.ok) {
          fbFeedback.className = 'fb-feedback is-ok';
          fbFeedback.textContent = res.url
            ? 'Đã lưu URL Firebase và kích hoạt đồng bộ trực tiếp!'
            : 'Đã chuyển về chế độ lưu cục bộ.';
        } else {
          fbFeedback.className = 'fb-feedback is-err';
          fbFeedback.textContent = res.error;
        }
      });
    }

    if (fbLocalBtn && fbInput && fbFeedback) {
      fbLocalBtn.addEventListener('click', () => {
        fbInput.value = '';
        store.setFirebaseUrl('');
        fbFeedback.hidden = false;
        fbFeedback.className = 'fb-feedback is-ok';
        fbFeedback.textContent = 'Đã chuyển về chế độ cục bộ trên trình duyệt này.';
      });
    }

    if (clearLocalBtn) {
      clearLocalBtn.addEventListener('click', () => {
        if (
          typeof global.confirm === 'function' &&
          !global.confirm('Xóa toàn bộ dữ liệu bảng xếp hạng lưu cục bộ trên trình duyệt này?')
        ) {
          return;
        }
        store.clearLocalData();
      });
    }

    if (goPlayBtn) {
      goPlayBtn.addEventListener('click', () => {
        if (global.App && typeof global.App.switchView === 'function') {
          global.App.switchView('game');
        }
      });
    }

    const unsubscribe = store.subscribe(renderDynamicParts);
    return {
      destroy: unsubscribe,
      refresh: () => store.fetchSnapshot()
    };
  }

  let activeKeyHandler = null;

  /**
   * Initialize and mount the interactive minigame inside containerEl.
   */
  async function init(containerEl, options = {}) {
    if (!containerEl) return null;
    const quizUrl = options.quizUrl || './data/quiz.md';
    const store = options.leaderboardStore || sharedLeaderboardStore;
    const sessionStore = resolveSessionStorage();

    containerEl.innerHTML = `
      <div class="game-loading">
        <p>Đang chuẩn bị dữ liệu Trạm Cân Hài Hòa Lợi Ích...</p>
      </div>
    `;

    let rawMd = DEFAULT_QUIZ_MD;
    try {
      const response = await fetch(quizUrl);
      if (response && response.ok) {
        const fetchedText = await response.text();
        if (fetchedText && fetchedText.trim()) {
          rawMd = fetchedText;
        }
      }
    } catch (_) {
      rawMd = DEFAULT_QUIZ_MD;
    }

    const parsed = parser.parseQuiz(rawMd);
    const meta = parsed.meta;
    const questions = parsed.questions;

    let savedPlayer = { fullName: '', mssv: '', key: '' };
    if (sessionStore) {
      try {
        const rawPlayer = sessionStore.getItem(LEADERBOARD_CONFIG.playerSessionKey);
        if (rawPlayer) {
          const parsedPlayer = JSON.parse(rawPlayer);
          if (parsedPlayer && parsedPlayer.fullName && parsedPlayer.mssv) {
            savedPlayer = {
              fullName: parsedPlayer.fullName,
              mssv: normalizeMssv(parsedPlayer.mssv),
              key: sanitizeFirebaseKey(parsedPlayer.mssv)
            };
            store.setActivePlayerKey(savedPlayer.key);
          }
        }
      } catch (_) {
        // Ignore session read error
      }
    }

    const state = {
      screen: 'intro', // 'intro' | 'playing' | 'summary'
      player: savedPlayer,
      isPracticeMode: false,
      scoreA: meta.initialA,
      scoreB: meta.initialB,
      lastDeltaA: null,
      lastDeltaB: null,
      currentIndex: 0,
      answered: false,
      selectedKey: null,
      history: [],
      startedAtMs: null,
      durationMs: 0,
      submittedThisRun: false,
      submissionResult: null
    };

    let stopwatchTimer = null;
    let summaryUnsubscribe = null;
    let introUnsubscribe = null;

    function stopStopwatch() {
      if (stopwatchTimer) {
        clearInterval(stopwatchTimer);
        stopwatchTimer = null;
      }
    }

    function startStopwatch() {
      stopStopwatch();
      state.startedAtMs = Date.now();
      state.durationMs = 0;
      stopwatchTimer = setInterval(() => {
        if (state.screen !== 'playing' || !state.startedAtMs) return;
        const elapsed = Date.now() - state.startedAtMs;
        const timerEl = containerEl.querySelector('#live-timer');
        if (timerEl) {
          timerEl.textContent = `⏱ ${formatDuration(elapsed, false)}`;
        }
      }, 250);
    }

    function freezeStopwatch() {
      if (state.startedAtMs) {
        state.durationMs = Math.max(0, Date.now() - state.startedAtMs);
      }
      stopStopwatch();
      const timerEl = containerEl.querySelector('#live-timer');
      if (timerEl) {
        timerEl.textContent = `⏱ ${formatDuration(state.durationMs, true)} (Đã chốt)`;
        timerEl.classList.add('is-frozen');
      }
    }

    function clearTransientListeners() {
      if (summaryUnsubscribe) {
        summaryUnsubscribe();
        summaryUnsubscribe = null;
      }
      if (introUnsubscribe) {
        introUnsubscribe();
        introUnsubscribe = null;
      }
    }

    function resetGameState(targetScreen) {
      stopStopwatch();
      clearTransientListeners();
      state.screen = targetScreen;
      state.scoreA = meta.initialA;
      state.scoreB = meta.initialB;
      state.lastDeltaA = null;
      state.lastDeltaB = null;
      state.currentIndex = 0;
      state.answered = false;
      state.selectedKey = null;
      state.history = [];
      state.startedAtMs = null;
      state.durationMs = 0;
      state.submittedThisRun = false;
      state.submissionResult = null;
      state.isPracticeMode = Boolean(state.player.mssv && store.hasMssv(state.player.mssv));
    }

    function savePlayerSession(player) {
      if (!sessionStore) return;
      try {
        sessionStore.setItem(LEADERBOARD_CONFIG.playerSessionKey, JSON.stringify(player));
      } catch (_) {
        // Ignore session write error
      }
    }

    async function submitCompletedRun() {
      if (state.submittedThisRun) return;
      state.submittedThisRun = true;

      const total = questions.length;
      const correctCount = state.history.filter((h) => h.chosenOption.isOptimal).length;
      const finalHarmony = computeHarmony(state.scoreA, state.scoreB);
      const classification = classifyState(state.scoreA, state.scoreB, correctCount, total);

      const res = await store.submitResult({
        key: state.player.key,
        mssv: state.player.mssv,
        fullName: state.player.fullName,
        harmony: finalHarmony,
        correctCount,
        totalQuestions: total,
        scoreA: state.scoreA,
        scoreB: state.scoreB,
        durationMs: state.durationMs,
        classificationCode: classification.code,
        classificationTitle: classification.badge,
        completedAt: Date.now()
      });

      state.submissionResult = res;
      if (state.screen === 'summary') {
        updateSummaryLeaderboardUI();
      }
    }

    function renderIntro() {
      stopStopwatch();
      clearTransientListeners();
      state.screen = 'intro';

      containerEl.innerHTML = `
        <section class="game-intro card-paper">
          <div class="intro-header">
            <span class="badge-academic">MINIGAME TƯƠNG TÁC • ${esc(meta.role.toUpperCase())}</span>
            <h2 class="intro-title">${esc(meta.title)}</h2>
            <p class="intro-goal">${esc(meta.goal)}</p>
          </div>

          <div class="intro-scale-preview">
            ${buildScaleSvgMarkup(meta.initialA, meta.initialB, 'intro-scale', false)}
          </div>

          <div class="pan-brief-grid">
            <article class="pan-brief-card pan-brief-a">
              <div class="pan-brief-head">
                <span class="pan-tag pan-tag-a">ĐĨA CÂN A</span>
                <h3>${esc(meta.panAName)} — ${esc(meta.panASubtitle)}</h3>
              </div>
              <p class="pan-brief-desc">${esc(meta.panADesc)}</p>
              <div class="pan-brief-risk">
                <strong>Rủi ro khi nghiêng quá mức sang A:</strong>
                <span>${esc(meta.riskA)}</span>
              </div>
            </article>

            <article class="pan-brief-card pan-brief-b">
              <div class="pan-brief-head">
                <span class="pan-tag pan-tag-b">ĐĨA CÂN B</span>
                <h3>${esc(meta.panBName)} — ${esc(meta.panBSubtitle)}</h3>
              </div>
              <p class="pan-brief-desc">${esc(meta.panBDesc)}</p>
              <div class="pan-brief-risk">
                <strong>Rủi ro khi nghiêng quá mức sang B:</strong>
                <span>${esc(meta.riskB)}</span>
              </div>
            </article>
          </div>

          <div class="mechanics-strip" aria-label="Cơ chế vận hành">
            <div class="mech-item">
              <span class="mech-label">Trạng thái khởi điểm</span>
              <strong class="mech-val">Đĩa A ${meta.initialA} — ${meta.initialB} Đĩa B</strong>
            </div>
            <div class="mech-item">
              <span class="mech-label">Số tình huống &amp; Thời gian</span>
              <strong class="mech-val">${questions.length} Câu • Tính giờ hoàn thành</strong>
            </div>
            <div class="mech-item">
              <span class="mech-label">Tiêu chí Bảng Xếp Hạng</span>
              <strong class="mech-val">Hài Hòa → Câu đúng → Nhanh nhất</strong>
            </div>
          </div>

          <form id="player-reg-form" class="player-reg-card" novalidate>
            <div class="reg-header">
              <h3>Thông Tin Sinh Viên Tham Gia</h3>
              <p>Kết quả và thời gian hoàn thành <strong>lượt đầu tiên</strong> của mỗi MSSV sẽ được lưu lên Bảng Xếp Hạng Trực Tiếp.</p>
            </div>

            <div class="reg-grid">
              <div class="reg-field">
                <label for="input-fullname">Họ và tên <span class="req-star">*</span></label>
                <input
                  type="text"
                  id="input-fullname"
                  name="fullName"
                  value="${esc(state.player.fullName)}"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  maxlength="80"
                  autocomplete="name"
                  required
                >
                <span id="err-fullname" class="field-error" hidden></span>
              </div>

              <div class="reg-field">
                <label for="input-mssv">Mã số sinh viên (MSSV) <span class="req-star">*</span></label>
                <input
                  type="text"
                  id="input-mssv"
                  name="mssv"
                  value="${esc(state.player.mssv)}"
                  placeholder="Ví dụ: 25520232"
                  maxlength="24"
                  autocomplete="off"
                  required
                >
                <span id="err-mssv" class="field-error" hidden></span>
              </div>
            </div>

            <div id="mssv-existing-notice" class="mssv-notice" hidden></div>

            <div class="intro-actions">
              <button type="submit" id="btn-start-game" class="btn-primary-game">
                Bắt Đầu Điều Tiết →
              </button>
              <button type="button" id="btn-intro-leaderboard" class="btn-secondary-game">
                🏆 Xem Bảng Xếp Hạng Trực Tiếp
              </button>
            </div>
          </form>
        </section>
      `;

      const formEl = containerEl.querySelector('#player-reg-form');
      const nameInput = containerEl.querySelector('#input-fullname');
      const mssvInput = containerEl.querySelector('#input-mssv');
      const errName = containerEl.querySelector('#err-fullname');
      const errMssv = containerEl.querySelector('#err-mssv');
      const noticeEl = containerEl.querySelector('#mssv-existing-notice');
      const lbBtn = containerEl.querySelector('#btn-intro-leaderboard');

      function updateExistingNotice() {
        if (!noticeEl || !mssvInput) return;
        const cleanMssv = normalizeMssv(mssvInput.value);
        const existing = cleanMssv.length >= 3 ? store.getEntry(cleanMssv) : null;
        if (existing) {
          noticeEl.hidden = false;
          noticeEl.innerHTML = `
            <strong>Lưu ý lượt đầu đã được ghi nhận:</strong>
            MSSV <code>${esc(existing.mssv)}</code> (${esc(existing.fullName)}) đã đạt
            <strong>${existing.harmony}/100</strong> Hài Hòa • <strong>${existing.correctCount}/${existing.totalQuestions || 8}</strong> câu đúng • <strong>${formatDuration(existing.durationMs, true)}</strong>.
            Bạn vẫn có thể chơi lại để luyện tập nhưng hệ thống không ghi đè thành tích đầu tiên.
          `;
        } else {
          noticeEl.hidden = true;
          noticeEl.innerHTML = '';
        }
      }

      if (mssvInput) {
        mssvInput.addEventListener('input', () => {
          if (errMssv) errMssv.hidden = true;
          updateExistingNotice();
        });
      }
      if (nameInput && errName) {
        nameInput.addEventListener('input', () => {
          errName.hidden = true;
        });
      }

      introUnsubscribe = store.subscribe(() => {
        updateExistingNotice();
      });

      if (formEl) {
        formEl.addEventListener('submit', (e) => {
          e.preventDefault();
          const check = validatePlayerInfo(
            nameInput ? nameInput.value : '',
            mssvInput ? mssvInput.value : ''
          );

          if (errName) {
            errName.textContent = check.errors.fullName;
            errName.hidden = !check.errors.fullName;
          }
          if (errMssv) {
            errMssv.textContent = check.errors.mssv;
            errMssv.hidden = !check.errors.mssv;
          }

          if (!check.valid) {
            if (check.errors.fullName && nameInput) nameInput.focus();
            else if (check.errors.mssv && mssvInput) mssvInput.focus();
            return;
          }

          state.player = check.player;
          savePlayerSession(check.player);
          store.setActivePlayerKey(check.player.key);
          resetGameState('playing');
          renderPlaying();
        });
      }

      if (lbBtn) {
        lbBtn.addEventListener('click', () => {
          if (global.App && typeof global.App.switchView === 'function') {
            global.App.switchView('leaderboard');
          }
        });
      }
    }

    function updateScaleStationDOM(deltaA, deltaB) {
      const angle = computeTiltAngle(state.scoreA, state.scoreB);
      const harmony = computeHarmony(state.scoreA, state.scoreB);
      const rawDiff = Math.abs(state.scoreA - state.scoreB);
      const rawHarmony = 100 - rawDiff;
      const liveStatus = getLiveBalanceStatus(state.scoreA, state.scoreB, meta);

      const beamEl = containerEl.querySelector('#play-scale-beam');
      const needleEl = containerEl.querySelector('#play-scale-needle');
      const leftPanEl = containerEl.querySelector('#play-scale-pan-left');
      const rightPanEl = containerEl.querySelector('#play-scale-pan-right');
      const weightsAEl = containerEl.querySelector('#play-scale-weights-a');
      const weightsBEl = containerEl.querySelector('#play-scale-weights-b');

      if (beamEl) beamEl.style.transform = `rotate(${angle}deg)`;
      if (needleEl) needleEl.style.transform = `rotate(${angle}deg)`;
      if (leftPanEl) leftPanEl.style.transform = `rotate(${-angle}deg)`;
      if (rightPanEl) rightPanEl.style.transform = `rotate(${-angle}deg)`;
      if (weightsAEl) weightsAEl.innerHTML = renderPanWeightsMarkup(state.scoreA, 'a');
      if (weightsBEl) weightsBEl.innerHTML = renderPanWeightsMarkup(state.scoreB, 'b');

      const svgEl = containerEl.querySelector('.scale-svg');
      if (svgEl) {
        svgEl.setAttribute(
          'aria-label',
          `Cán cân thể chế kinh tế: Đĩa A ${state.scoreA} điểm, Đĩa B ${state.scoreB} điểm`
        );
      }

      const statusBadge = containerEl.querySelector('#scale-status-badge');
      if (statusBadge) {
        statusBadge.className = `status-pill tone-${liveStatus.tone}`;
        statusBadge.textContent = liveStatus.label;
      }

      const scoreAEl = containerEl.querySelector('#val-score-a');
      const scoreBEl = containerEl.querySelector('#val-score-b');
      if (scoreAEl) scoreAEl.textContent = String(state.scoreA);
      if (scoreBEl) scoreBEl.textContent = String(state.scoreB);

      const deltaAEl = containerEl.querySelector('#last-delta-a');
      const deltaBEl = containerEl.querySelector('#last-delta-b');
      if (deltaAEl) {
        deltaAEl.textContent =
          typeof deltaA === 'number' && deltaA > 0 ? `+${deltaA}` : '+0';
        deltaAEl.hidden = typeof deltaA !== 'number';
      }
      if (deltaBEl) {
        deltaBEl.textContent =
          typeof deltaB === 'number' && deltaB > 0 ? `+${deltaB}` : '+0';
        deltaBEl.hidden = typeof deltaB !== 'number';
      }

      const popA = containerEl.querySelector('#delta-a-pop');
      const popB = containerEl.querySelector('#delta-b-pop');
      if (popA) {
        popA.classList.remove('is-active');
        if (typeof deltaA === 'number' && deltaA > 0) {
          popA.textContent = `+${deltaA} Đĩa A`;
          void popA.offsetWidth;
          popA.classList.add('is-active');
        }
      }
      if (popB) {
        popB.classList.remove('is-active');
        if (typeof deltaB === 'number' && deltaB > 0) {
          popB.textContent = `+${deltaB} Đĩa B`;
          void popB.offsetWidth;
          popB.classList.add('is-active');
        }
      }

      const harmonyValEl = containerEl.querySelector('#val-harmony');
      const harmonyFillEl = containerEl.querySelector('#harmony-fill');
      const harmonyFormulaEl = containerEl.querySelector('#harmony-formula');
      if (harmonyValEl) {
        harmonyValEl.textContent = String(harmony);
        harmonyValEl.className = `harmony-number tone-${liveStatus.tone}`;
      }
      if (harmonyFillEl) {
        harmonyFillEl.style.width = `${harmony}%`;
        harmonyFillEl.className = `harmony-fill tone-${liveStatus.tone}`;
      }
      if (harmonyFormulaEl) {
        const clampNote =
          rawHarmony < 0
            ? ` = ${rawHarmony} → kẹp tối thiểu 0`
            : ` = ${harmony}`;
        harmonyFormulaEl.textContent = `100 − |${state.scoreA} − ${state.scoreB}| = 100 − ${rawDiff}${clampNote}`;
      }

      const riskBox = containerEl.querySelector('#scale-risk-note');
      if (riskBox) {
        riskBox.className = `scale-risk-note tone-${liveStatus.tone}`;
        riskBox.innerHTML = `<strong>Trạng thái lý luận:</strong> ${esc(liveStatus.note)}`;
      }
    }

    function renderScenarioColumn() {
      const panel = containerEl.querySelector('#scenario-panel');
      if (!panel) return;

      const q = questions[state.currentIndex];
      const total = questions.length;
      const chosenOpt = state.answered
        ? q.options.find((o) => o.key === state.selectedKey)
        : null;

      const isFinalAnswered = state.answered && state.currentIndex === total - 1;
      const timerDisplay = isFinalAnswered
        ? `⏱ ${formatDuration(state.durationMs, true)} (Đã chốt)`
        : `⏱ ${formatDuration(state.startedAtMs ? Date.now() - state.startedAtMs : 0, false)}`;

      const dotsHtml = questions
        .map((item, idx) => {
          const hist = state.history[idx];
          let cls = 'step-dot';
          if (hist) {
            cls += hist.chosenOption.isOptimal ? ' is-done-ok' : ' is-done-warn';
          } else if (idx === state.currentIndex) {
            cls += ' is-current';
          }
          return `<span class="${cls}" title="Câu ${item.id}">${item.id}</span>`;
        })
        .join('');

      const situationHtml = q.situation
        ? `<div class="situation-box">
             <span class="situation-label">Bối cảnh tình huống</span>
             <p>${esc(q.situation)}</p>
           </div>`
        : '';

      const choicesHtml = q.options
        .map((opt) => {
          let btnCls = 'choice-btn';
          if (state.answered) {
            if (opt.key === state.selectedKey && opt.isOptimal) {
              btnCls += ' is-optimal';
            } else if (opt.key === state.selectedKey && !opt.isOptimal) {
              btnCls += ' is-wrong';
            } else if (opt.isOptimal) {
              btnCls += ' is-reveal-optimal';
            } else {
              btnCls += ' is-dimmed';
            }
          }

          const deltaChips = state.answered
            ? `<span class="choice-deltas">
                 <span class="delta-chip chip-a ${opt.deltaA > 0 ? 'has-val' : ''}">Đĩa A +${opt.deltaA}</span>
                 <span class="delta-chip chip-b ${opt.deltaB > 0 ? 'has-val' : ''}">Đĩa B +${opt.deltaB}</span>
               </span>`
            : '';

          return `
            <button
              type="button"
              class="${btnCls}"
              data-key="${esc(opt.key)}"
              ${state.answered ? 'disabled' : ''}
            >
              <span class="choice-key">${esc(opt.key)}</span>
              <span class="choice-body">
                <span class="choice-text">${esc(opt.text)}</span>
                ${deltaChips}
              </span>
            </button>
          `;
        })
        .join('');

      let explanationHtml = '';
      if (state.answered && chosenOpt) {
        const isLast = state.currentIndex === total - 1;
        const feedbackTag = chosenOpt.isOptimal
          ? '<span class="feedback-badge is-ok">Quyết định hài hòa (+10 Đĩa A, +10 Đĩa B)</span>'
          : `<span class="feedback-badge is-skew">Gây lệch cán cân (Đĩa A +${chosenOpt.deltaA}, Đĩa B +${chosenOpt.deltaB})</span>`;

        explanationHtml = `
          <div class="explanation-box ${chosenOpt.isOptimal ? 'is-ok' : 'is-skew'}">
            <div class="explanation-head">
              ${feedbackTag}
            </div>
            <p class="explanation-text"><strong>Phân tích thể chế:</strong> ${esc(q.explanation)}</p>
            <div class="explanation-actions">
              <button type="button" id="btn-next-question" class="btn-primary-game">
                ${isLast ? 'Xem Báo Cáo & Bảng Xếp Hạng →' : 'Tình huống tiếp theo →'}
              </button>
            </div>
          </div>
        `;
      }

      const practiceBadge = state.isPracticeMode
        ? '<span class="practice-pill">Chế độ luyện tập</span>'
        : '';

      panel.innerHTML = `
        <div class="player-timer-bar">
          <div class="player-chip">
            <span class="player-avatar" aria-hidden="true">👤</span>
            <span class="player-id-text">
              <strong>${esc(state.player.fullName)}</strong>
              <code>${esc(state.player.mssv)}</code>
            </span>
            ${practiceBadge}
          </div>
          <span id="live-timer" class="timer-pill${isFinalAnswered ? ' is-frozen' : ''}" aria-live="off">
            ${timerDisplay}
          </span>
        </div>

        <div class="scenario-top-bar">
          <div class="scenario-progress-meta">
            <span class="q-counter">Tình huống ${state.currentIndex + 1} / ${total}</span>
            <span class="keyboard-hint">Phím tắt: A–D hoặc 1–4${state.answered ? ' • Enter để tiếp tục' : ''}</span>
          </div>
          <div class="step-dots" aria-label="Tiến độ 8 câu">${dotsHtml}</div>
        </div>

        ${situationHtml}

        <h3 class="question-title">${esc(q.question)}</h3>

        <div class="choice-list" role="group" aria-label="Các phương án điều tiết">
          ${choicesHtml}
        </div>

        ${explanationHtml}

        <div class="scenario-footer-tools">
          <button type="button" id="btn-back-intro" class="btn-ghost-sm">← Xem lại lý luận / Đổi sinh viên</button>
          <button type="button" id="btn-restart-inline" class="btn-ghost-sm">↻ Chơi lại từ đầu</button>
        </div>
      `;

      panel.querySelectorAll('.choice-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          handleAnswer(btn.getAttribute('data-key'));
        });
      });

      const nextBtn = panel.querySelector('#btn-next-question');
      if (nextBtn) {
        nextBtn.addEventListener('click', advanceQuestion);
      }

      const backIntroBtn = panel.querySelector('#btn-back-intro');
      if (backIntroBtn) {
        backIntroBtn.addEventListener('click', () => {
          resetGameState('intro');
          renderIntro();
        });
      }

      const restartBtn = panel.querySelector('#btn-restart-inline');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          resetGameState('playing');
          renderPlaying();
        });
      }
    }

    function handleAnswer(key) {
      if (state.screen !== 'playing' || state.answered) return;
      const q = questions[state.currentIndex];
      const chosen = q.options.find((o) => o.key === key);
      if (!chosen) return;

      const optimal = q.options.find((o) => o.isOptimal) || chosen;
      state.answered = true;
      state.selectedKey = chosen.key;
      state.scoreA += chosen.deltaA;
      state.scoreB += chosen.deltaB;
      state.lastDeltaA = chosen.deltaA;
      state.lastDeltaB = chosen.deltaB;

      state.history.push({
        question: q,
        chosenOption: chosen,
        optimalOption: optimal,
        scoreAAfter: state.scoreA,
        scoreBAfter: state.scoreB,
        harmonyAfter: computeHarmony(state.scoreA, state.scoreB)
      });

      if (state.currentIndex === questions.length - 1) {
        freezeStopwatch();
        submitCompletedRun();
      }

      updateScaleStationDOM(chosen.deltaA, chosen.deltaB);
      renderScenarioColumn();
    }

    function advanceQuestion() {
      if (state.screen !== 'playing' || !state.answered) return;
      if (state.currentIndex < questions.length - 1) {
        state.currentIndex += 1;
        state.answered = false;
        state.selectedKey = null;
        renderScenarioColumn();
      } else {
        renderSummary();
      }
    }

    function renderPlaying() {
      clearTransientListeners();
      state.screen = 'playing';
      const harmony = computeHarmony(state.scoreA, state.scoreB);
      const rawDiff = Math.abs(state.scoreA - state.scoreB);
      const liveStatus = getLiveBalanceStatus(state.scoreA, state.scoreB, meta);

      containerEl.innerHTML = `
        <div class="game-play-layout">
          <aside class="scale-station card-paper" aria-label="Trạm quan sát cán cân thể chế">
            <div class="scale-station-head">
              <span class="station-kicker">TRẠM QUAN SÁT CÁN CÂN</span>
              <span id="scale-status-badge" class="status-pill tone-${liveStatus.tone}">
                ${esc(liveStatus.label)}
              </span>
            </div>

            <div class="scale-stage">
              <div id="delta-a-pop" class="delta-pop delta-pop-a" aria-hidden="true"></div>
              <div id="delta-b-pop" class="delta-pop delta-pop-b" aria-hidden="true"></div>
              ${buildScaleSvgMarkup(state.scoreA, state.scoreB, 'play-scale', true)}
            </div>

            <div class="pan-readouts">
              <div class="pan-score-card pan-score-a">
                <div class="pan-score-head">
                  <span class="pan-score-label">Đĩa A • Thị Trường</span>
                  <span id="last-delta-a" class="last-delta" hidden></span>
                </div>
                <strong id="val-score-a" class="pan-score-num">${state.scoreA}</strong>
              </div>

              <div class="pan-score-card pan-score-b">
                <div class="pan-score-head">
                  <span class="pan-score-label">Đĩa B • An Sinh</span>
                  <span id="last-delta-b" class="last-delta" hidden></span>
                </div>
                <strong id="val-score-b" class="pan-score-num">${state.scoreB}</strong>
              </div>
            </div>

            <div class="harmony-card">
              <div class="harmony-head">
                <span class="harmony-label">Điểm Hài Hòa</span>
                <span class="harmony-score-wrap">
                  <strong id="val-harmony" class="harmony-number tone-${liveStatus.tone}">${harmony}</strong>
                  <span class="harmony-max">/ 100</span>
                </span>
              </div>
              <div class="harmony-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${harmony}">
                <div id="harmony-fill" class="harmony-fill tone-${liveStatus.tone}" style="width: ${harmony}%"></div>
              </div>
              <p id="harmony-formula" class="harmony-formula">
                100 − |${state.scoreA} − ${state.scoreB}| = 100 − ${rawDiff} = ${harmony}
              </p>
            </div>

            <div id="scale-risk-note" class="scale-risk-note tone-${liveStatus.tone}">
              <strong>Trạng thái lý luận:</strong> ${esc(liveStatus.note)}
            </div>
          </aside>

          <section id="scenario-panel" class="scenario-panel card-paper" aria-live="polite"></section>
        </div>
      `;

      startStopwatch();
      renderScenarioColumn();
    }

    function buildSubmissionBannerHtml(snapshot) {
      const res = state.submissionResult;
      const entries = snapshot ? snapshot.entries : store.getSortedEntries();
      const myEntry = entries.find(
        (e) => (e.key || sanitizeFirebaseKey(e.mssv)) === state.player.key
      );
      const rankInfo = myEntry
        ? `Hạng hiện tại trên BXH: <strong>#${myEntry.rank} / ${entries.length}</strong>`
        : '';

      if (!res) {
        return `
          <div class="submission-banner is-saving">
            <span>Đang lưu kết quả lên Bảng Xếp Hạng Trực Tiếp...</span>
          </div>
        `;
      }

      if (res.saved) {
        const modeNote =
          res.mode === 'firebase'
            ? 'Đã đồng bộ trực tiếp lên Firebase'
            : res.warning
              ? res.warning
              : 'Đã lưu trên trình duyệt này (chế độ cục bộ)';
        return `
          <div class="submission-banner is-saved">
            <div>
              <strong>✓ Đã ghi nhận thành tích lượt đầu tiên của MSSV ${esc(state.player.mssv)}!</strong>
              <span>${esc(modeNote)}${rankInfo ? ` • ${rankInfo}` : ''}</span>
            </div>
          </div>
        `;
      }

      if (res.reason === 'already_recorded' && res.existingRecord) {
        const prev = res.existingRecord;
        return `
          <div class="submission-banner is-existing">
            <div>
              <strong>ℹ MSSV ${esc(state.player.mssv)} đã được ghi nhận ở lượt chơi đầu tiên</strong>
              <span>
                Hệ thống chỉ lưu kết quả đầu tiên (${prev.harmony}/100 Hài Hòa • ${prev.correctCount}/${prev.totalQuestions || 8} câu đúng • ${formatDuration(prev.durationMs, true)})${rankInfo ? ` — ${rankInfo}` : ''}. Lượt này không ghi đè BXH.
              </span>
            </div>
          </div>
        `;
      }

      return `
        <div class="submission-banner is-warn">
          <div>
            <strong>⚠ Lưu ý đồng bộ kết quả</strong>
            <span>${esc(res.error || res.warning || 'Không thể đồng bộ lên máy chủ trực tuyến.')}</span>
          </div>
        </div>
      `;
    }

    function updateSummaryLeaderboardUI(snapshotArg) {
      if (state.screen !== 'summary') return;
      const snapshot = snapshotArg || store.getSnapshot();
      const statusMeta = getStatusMeta(snapshot.status);

      const bannerEl = containerEl.querySelector('#summary-submission-banner');
      if (bannerEl) {
        bannerEl.innerHTML = buildSubmissionBannerHtml(snapshot);
      }

      const pillEl = containerEl.querySelector('#summary-lb-status');
      if (pillEl) {
        pillEl.className = `live-indicator ${statusMeta.cls}${statusMeta.pulsing ? ' is-pulsing' : ''}`;
        pillEl.innerHTML = `<span class="live-dot" aria-hidden="true"></span><span>${esc(statusMeta.label)}</span>`;
      }

      const tbodyEl = containerEl.querySelector('#summary-lb-body');
      if (tbodyEl) {
        tbodyEl.innerHTML = renderLeaderboardRowsHtml(
          snapshot.entries || [],
          state.player.key,
          'Chưa có dữ liệu trên bảng xếp hạng.'
        );
      }
    }

    function renderSummary() {
      stopStopwatch();
      clearTransientListeners();
      state.screen = 'summary';

      const total = questions.length;
      const correctCount = state.history.filter(
        (h) => h.chosenOption.isOptimal
      ).length;
      const finalHarmony = computeHarmony(state.scoreA, state.scoreB);
      const rawDiff = Math.abs(state.scoreA - state.scoreB);
      const result = classifyState(
        state.scoreA,
        state.scoreB,
        correctCount,
        total
      );

      const reviewHtml = state.history
        .map((entry) => {
          const { question, chosenOption, optimalOption, scoreAAfter, scoreBAfter } = entry;
          const isOk = chosenOption.isOptimal;

          const optimalRow = !isOk
            ? `<p class="review-optimal">
                 <strong>Phương án hài hòa:</strong>
                 [${esc(optimalOption.key)}] ${esc(optimalOption.text)}
                 <span class="review-mini-delta">(Đĩa A +${optimalOption.deltaA}, Đĩa B +${optimalOption.deltaB})</span>
               </p>`
            : '';

          return `
            <article class="review-item ${isOk ? 'is-ok' : 'is-skew'}">
              <div class="review-item-head">
                <span class="review-q-num">${esc(question.label)}</span>
                <span class="review-status ${isOk ? 'is-ok' : 'is-skew'}">
                  ${isOk ? 'Giữ cân bằng' : 'Gây lệch cân'}
                </span>
                <span class="review-running-score">Sau quyết định: A ${scoreAAfter} — B ${scoreBAfter}</span>
              </div>
              <p class="review-question">${esc(question.question)}</p>
              <p class="review-chosen">
                <strong>Bạn chọn:</strong>
                [${esc(chosenOption.key)}] ${esc(chosenOption.text)}
                <span class="review-mini-delta">(Đĩa A +${chosenOption.deltaA}, Đĩa B +${chosenOption.deltaB})</span>
              </p>
              ${optimalRow}
              <p class="review-exp"><strong>Giải thích:</strong> ${esc(question.explanation)}</p>
            </article>
          `;
        })
        .join('');

      containerEl.innerHTML = `
        <section class="game-summary">
          <div id="summary-submission-banner"></div>

          <div class="summary-hero card-paper tone-${result.tone}">
            <div class="summary-hero-text">
              <div class="summary-badges-row">
                <span class="status-pill tone-${result.tone}">${esc(result.badge)}</span>
                <span class="summary-student-tag">👤 ${esc(state.player.fullName)} • <code>${esc(state.player.mssv)}</code></span>
              </div>
              <h2 class="summary-title">${esc(result.title)}</h2>
              <p class="summary-desc">${esc(result.description)}</p>

              <div class="summary-kpis summary-kpis-5">
                <div class="kpi-box kpi-main">
                  <span>Điểm Hài Hòa</span>
                  <strong>${finalHarmony}<em>/100</em></strong>
                </div>
                <div class="kpi-box">
                  <span>Câu đúng</span>
                  <strong>${correctCount}<em>/${total}</em></strong>
                </div>
                <div class="kpi-box kpi-time">
                  <span>Thời gian</span>
                  <strong>${formatDuration(state.durationMs, true)}</strong>
                </div>
                <div class="kpi-box kpi-a">
                  <span>Đĩa A (TT)</span>
                  <strong>${state.scoreA}</strong>
                </div>
                <div class="kpi-box kpi-b">
                  <span>Đĩa B (AS)</span>
                  <strong>${state.scoreB}</strong>
                </div>
              </div>
              <p class="summary-formula-note">
                Độ lệch cuối kỳ: |${state.scoreA} − ${state.scoreB}| = ${rawDiff}
                ${100 - rawDiff < 0 ? ' (Điểm Hài Hòa kẹp ở mức tối thiểu 0)' : ''}
              </p>
            </div>

            <div class="summary-scale-snapshot">
              ${buildScaleSvgMarkup(state.scoreA, state.scoreB, 'summary-scale', false)}
            </div>
          </div>

          <div class="summary-actions-bar">
            <button type="button" id="btn-replay-game" class="btn-primary-game">
              ↻ Chơi Lại (Luyện Tập)
            </button>
            <button type="button" id="btn-change-student" class="btn-secondary-game">
              👤 Đổi Sinh Viên Mới
            </button>
            <button type="button" id="btn-open-full-lb" class="btn-secondary-game">
              🏆 Xem Bảng Xếp Hạng Đầy Đủ
            </button>
          </div>

          <div class="summary-leaderboard card-paper">
            <div class="summary-lb-head">
              <div>
                <h3 class="review-heading">Bảng Xếp Hạng Trực Tiếp</h3>
                <p class="lb-mini-sub">Thứ tự: Điểm Hài Hòa → Số câu đúng → Thời gian hoàn thành</p>
              </div>
              <span id="summary-lb-status" class="live-indicator is-local"></span>
            </div>
            <div class="lb-table-wrap">
              <table class="lb-table">
                <thead>
                  <tr>
                    <th>Hạng</th>
                    <th>Họ và tên</th>
                    <th>MSSV</th>
                    <th>Điểm Hài Hòa</th>
                    <th>Câu đúng</th>
                    <th>Thời gian</th>
                    <th>Trạng thái cân</th>
                  </tr>
                </thead>
                <tbody id="summary-lb-body"></tbody>
              </table>
            </div>
          </div>

          <div class="summary-review card-paper">
            <h3 class="review-heading">Nhật Ký 8 Quyết Định Điều Tiết</h3>
            <div class="review-list">
              ${reviewHtml}
            </div>
          </div>
        </section>
      `;

      summaryUnsubscribe = store.subscribe((snapshot) => {
        updateSummaryLeaderboardUI(snapshot);
      });

      const replayBtn = containerEl.querySelector('#btn-replay-game');
      if (replayBtn) {
        replayBtn.addEventListener('click', () => {
          resetGameState('playing');
          renderPlaying();
        });
      }

      const changeStudentBtn = containerEl.querySelector('#btn-change-student');
      if (changeStudentBtn) {
        changeStudentBtn.addEventListener('click', () => {
          state.player = { fullName: '', mssv: '', key: '' };
          if (sessionStore) {
            try {
              sessionStore.removeItem(LEADERBOARD_CONFIG.playerSessionKey);
            } catch (_) {
              // Ignore error
            }
          }
          store.setActivePlayerKey(null);
          resetGameState('intro');
          renderIntro();
        });
      }

      const fullLbBtn = containerEl.querySelector('#btn-open-full-lb');
      if (fullLbBtn) {
        fullLbBtn.addEventListener('click', () => {
          if (global.App && typeof global.App.switchView === 'function') {
            global.App.switchView('leaderboard');
          }
        });
      }
    }

    if (typeof document !== 'undefined') {
      if (activeKeyHandler) {
        document.removeEventListener('keydown', activeKeyHandler);
      }
      activeKeyHandler = (event) => {
        const viewGame = document.getElementById('view-game');
        if (viewGame && viewGame.hidden) return;
        if (state.screen !== 'playing') return;

        const target = event.target;
        const tag = target && target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (target && target.isContentEditable)) {
          return;
        }

        const keyMap = {
          a: 'A',
          A: 'A',
          1: 'A',
          b: 'B',
          B: 'B',
          2: 'B',
          c: 'C',
          C: 'C',
          3: 'C',
          d: 'D',
          D: 'D',
          4: 'D'
        };

        if (!state.answered && keyMap[event.key]) {
          event.preventDefault();
          handleAnswer(keyMap[event.key]);
        } else if (state.answered && event.key === 'Enter') {
          event.preventDefault();
          advanceQuestion();
        }
      };
      document.addEventListener('keydown', activeKeyHandler);
    }

    store.connect();
    renderIntro();

    return {
      getState: () => ({ ...state }),
      restart: () => {
        if (!state.player.fullName || !state.player.mssv) {
          resetGameState('intro');
          renderIntro();
          return;
        }
        resetGameState('playing');
        renderPlaying();
      }
    };
  }

  const api = {
    DEFAULT_QUIZ_MD,
    LEADERBOARD_CONFIG,
    computeHarmony,
    computeTiltAngle,
    classifyState,
    getLiveBalanceStatus,
    normalizeMssv,
    sanitizeFirebaseKey,
    validatePlayerInfo,
    formatDuration,
    compareLeaderboardEntries,
    buildLeaderboardCsv,
    createLeaderboardStore,
    leaderboardStore: sharedLeaderboardStore,
    initLeaderboardView,
    init
  };

  global.HarmonyGame = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);

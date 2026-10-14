        // Database of smart gift recommendations with explicit HOBBY tags
        let GIFT_DATABASE = [
            // ==================== ATHLETE (СПОРТСМЕН) ====================
            {
                id: 'ath1',
                hobby: 'athlete',
                minBudget: 400,
                maxBudget: 2000,
                recipients: ['friend', 'partner', 'relative', 'colleague'],
                events: ['birthday', 'newyear', 'justbecause'],
                category: 'Спорт & Фітнес',
                title: 'Смарт-фітнес браслет з підрахунком пульсу та калорій (Xiaomi Band)',
                description: 'Відстежує тренування, пульс, якість сну та активність протягом усього дня.'
            },
            {
                id: 'ath2',
                hobby: 'athlete',
                minBudget: 1200,
                maxBudget: 4500,
                recipients: ['friend', 'partner', 'relative'],
                events: ['birthday', 'newyear', 'anniversary'],
                category: 'Масаж & Відновлення',
                title: 'Перкусійний масажний пістолет (Massage Gun) для м’язів',
                description: 'Швидко знімає кріпатуру, розслабляє глибокі м’язи після інтенсивного тренування.'
            },
            {
                id: 'ath3',
                hobby: 'athlete',
                minBudget: 200,
                maxBudget: 900,
                recipients: ['friend', 'colleague', 'kid'],
                events: ['birthday', 'justbecause'],
                category: 'Аксесуари для спортзалу',
                title: 'Набір тканинних фітнес-резинок та спортивний шейкер з контейнером',
                description: 'Компактний набір для тренувань вдома, у залі чи на свіжому повітрі.'
            },
            {
                id: 'ath4',
                hobby: 'athlete',
                minBudget: 1500,
                maxBudget: 6000,
                recipients: ['friend', 'partner'],
                events: ['birthday', 'professional'],
                category: 'Акустика для спорту',
                title: 'Вологозахищені бездротові спортивні навушники з завушинами',
                description: 'Надійно фіксуються у вухах під час бігу, фітнесу та активних вправ.'
            },

            // ==================== GAMER (ГЕЙМЕР) ====================
            {
                id: 'gam1',
                hobby: 'gamer',
                minBudget: 500,
                maxBudget: 2500,
                recipients: ['friend', 'partner', 'kid'],
                events: ['birthday', 'newyear', 'justbecause'],
                category: 'Геймінг & Периферія',
                title: 'Бездротова ігрова миша з високм DPI та килимок з RGB-підсвіткою',
                description: 'Забезпечує максимальну точність, плавне ковзання та стильний вигляд ігрового столу.'
            },
            {
                id: 'gam2',
                hobby: 'gamer',
                minBudget: 1800,
                maxBudget: 4500,
                recipients: ['friend', 'partner', 'kid'],
                events: ['birthday', 'newyear'],
                category: 'Консолі & Контролери',
                title: 'Бездротовий геймпад (Xbox Wireless Controller / DualSense) або підписка Game Pass',
                description: 'Ідеальний подарунок для ПК чи консолі, який відкриває доступ до сотень ігор.'
            },
            {
                id: 'gam3',
                hobby: 'gamer',
                minBudget: 1200,
                maxBudget: 5500,
                recipients: ['friend', 'kid', 'partner'],
                events: ['birthday', 'newyear', 'professional'],
                category: 'Ігровий Звук',
                title: 'Повнорозмірні ігрові навушники з 7.1 об’ємним звуком та мікрофоном',
                description: 'Дозволяють чути кожен крок супротивника в грі та комфортно спілкуватися в Discord.'
            },
            {
                id: 'gam4',
                hobby: 'gamer',
                minBudget: 600,
                maxBudget: 2200,
                recipients: ['friend', 'kid'],
                events: ['justbecause', 'birthday'],
                category: 'Декор & Атмосфера',
                title: 'Розумна світлодіодна RGB-стрічка для монітора з синхронізацією кольорів',
                description: 'Створює вражаючу підсвітку ігрового місця відповідно до подій на екрані.'
            },

            // ==================== BOOKWORM (КНИГОЛЮБ) ====================
            {
                id: 'boo1',
                hobby: 'bookworm',
                minBudget: 2500,
                maxBudget: 7500,
                recipients: ['partner', 'relative', 'friend', 'colleague'],
                events: ['birthday', 'newyear', 'anniversary'],
                category: 'Електронні Книги',
                title: 'Електронна книга з безпечним E-Ink екраном та підсвічуванням (PocketBook / Kindle)',
                description: 'Вміщує тисячі книг у кишені. Екран не стомлює очі під час тривалого читання.'
            },
            {
                id: 'boo2',
                hobby: 'bookworm',
                minBudget: 300,
                maxBudget: 1200,
                recipients: ['friend', 'relative', 'colleague'],
                events: ['birthday', 'justbecause', 'newyear'],
                category: 'Колекційні Книги',
                title: 'Колекційне ілюстроване видання світового бестселера у твердій обкладинці',
                description: 'Вишукане оформлення з кольоровим зрізом сторінок прикрасить будь-яку домашню бібліотеку.'
            },
            {
                id: 'boo3',
                hobby: 'bookworm',
                minBudget: 200,
                maxBudget: 700,
                recipients: ['friend', 'partner', 'relative'],
                events: ['justbecause', 'newyear'],
                category: 'Затишний Сети',
                title: 'Набір «Затишне читання»: аромасвічка, крафтовий чай та металева закладка',
                description: 'Атмосферний сет для приємних осінніх чи зимових вечорів за улюбленою книгою.'
            },
            {
                id: 'boo4',
                hobby: 'bookworm',
                minBudget: 150,
                maxBudget: 600,
                recipients: ['friend', 'colleague', 'kid'],
                events: ['justbecause', 'birthday'],
                category: 'Аксесуари для книг',
                title: 'Портативна гнучка LED-лампа для читання вночі та дерев’яний тримач сторінок',
                description: 'Корисний девайс для читання в дорозі чи ввечері в ліжку без заваги оточуючим.'
            },

            // ==================== COOK (КУЛІНАР) ====================
            {
                id: 'coo1',
                hobby: 'cook',
                minBudget: 350,
                maxBudget: 1500,
                recipients: ['partner', 'relative', 'friend', 'colleague'],
                events: ['birthday', 'newyear', 'justbecause'],
                category: 'Спеції & Смак',
                title: 'Набір з 12 екзотичних спецій світу в скляних баночках на дерев’яній підставці',
                description: 'Надихає на кулінарні експерименти та додає вишуканого смаку кожній страві.'
            },
            {
                id: 'coo2',
                hobby: 'cook',
                minBudget: 1200,
                maxBudget: 4500,
                recipients: ['partner', 'relative'],
                events: ['birthday', 'anniversary'],
                category: 'Професійні Ножі',
                title: 'Шеф-ніж із дамаської сталі у подарунковому дерев’яному чохлі',
                description: 'Неймовірно гострий, збалансований та естетичний ніж для ідеальної нарізки.'
            },
            {
                id: 'coo3',
                hobby: 'cook',
                minBudget: 2000,
                maxBudget: 8000,
                recipients: ['partner', 'relative', 'colleague'],
                events: ['birthday', 'anniversary', 'newyear'],
                category: 'Смарт-Кухня',
                title: 'Занурювальний су-від (Sous-Vide) або мультипіч / аерогриль',
                description: 'Дозволяє готувати страви рестораного рівня із соковитим м’ясом та рибою.'
            },
            {
                id: 'coo4',
                hobby: 'cook',
                minBudget: 400,
                maxBudget: 1200,
                recipients: ['friend', 'partner', 'relative'],
                events: ['justbecause', 'birthday'],
                category: 'Кухонні Девайси',
                title: 'Набір силіконового приладдя преміум-класу та кухонні точні ваги',
                description: 'Практичні та стильній помічники для щоденного випікання та кулінарії.'
            },

            // ==================== TRAVELER (МАНДРІВНИК) ====================
            {
                id: 'tra1',
                hobby: 'traveler',
                minBudget: 300,
                maxBudget: 1100,
                recipients: ['friend', 'partner', 'colleague'],
                events: ['birthday', 'justbecause'],
                category: 'Тревел-Аксесуари',
                title: 'Органайзер для документів, паспортів та сітчасті куби для пакування валізи',
                description: 'Впорядковує речі в подорожі та робить кожну поїздку максимально комфортною.'
            },
            {
                id: 'tra2',
                hobby: 'traveler',
                minBudget: 600,
                maxBudget: 2200,
                recipients: ['friend', 'partner', 'relative'],
                events: ['birthday', 'newyear'],
                category: 'Туристичний Затишок',
                title: 'Вакуумний термос-пляшка з металевою колбою на 1 л та термокружка',
                description: 'Утримує напій гарячим до 24 годин в будь-яких погодних умовах у поході.'
            },
            {
                id: 'tra3',
                hobby: 'traveler',
                minBudget: 250,
                maxBudget: 800,
                recipients: ['friend', 'partner'],
                events: ['justbecause', 'birthday'],
                category: 'Карти & Пам’ять',
                title: 'Велика скреч-карта світу чи України у подарунковому тубусі',
                description: 'Надихає на нові поїздки та дозволяє стильно стирати монетою відвідані країни.'
            },
            {
                id: 'tra4',
                hobby: 'traveler',
                minBudget: 1200,
                maxBudget: 4000,
                recipients: ['friend', 'partner', 'colleague'],
                events: ['birthday', 'professional'],
                category: 'Енергія в Дорозі',
                title: 'Потужний Power Bank на 20000 mAh із швидкою зарядкою та ліхтариком',
                description: 'Незамінне джерело живлення для смартфона, навушників та нагатора у поїздках.'
            },

            // ==================== ARTIST (ТВОРЕЦЬ / АРТ) ====================
            {
                id: 'art1',
                hobby: 'artist',
                minBudget: 400,
                maxBudget: 1800,
                recipients: ['friend', 'partner', 'kid', 'colleague'],
                events: ['birthday', 'justbecause', 'newyear'],
                category: 'Художні Матеріали',
                title: 'Набір з 80 професійних спиртових маркерів Touch та щільний скетчбук',
                description: 'Ідеальний комплект для ілюстрацій, скетчингу, коміксів та дизайнерських малюнків.'
            },
            {
                id: 'art2',
                hobby: 'artist',
                minBudget: 800,
                maxBudget: 3000,
                recipients: ['friend', 'partner', 'relative'],
                events: ['birthday', 'newyear'],
                category: 'Живопис',
                title: 'Настільний дерев’яний мольберт-планшет та полотна на підрамниках з фарбами',
                description: 'Повноцінний комплект для створення живописних картин олією чи акрилом.'
            },
            {
                id: 'art3',
                hobby: 'artist',
                minBudget: 2200,
                maxBudget: 9000,
                recipients: ['friend', 'partner', 'kid'],
                events: ['birthday', 'professional'],
                category: 'Цифровий Арт',
                title: 'Графічний планшет для малювання на комп’ютері (Wacom / Huion)',
                description: 'Відкриває безмежні можливості для цифрового малювання, ретуші та 3D-дизайну.'
            },
            {
                id: 'art4',
                hobby: 'artist',
                minBudget: 300,
                maxBudget: 1200,
                recipients: ['friend', 'kid'],
                events: ['justbecause', 'birthday'],
                category: 'Крафт & Хендмейд',
                title: 'Набір для створення скульптур з полімерної глини або сургучна печатка',
                description: 'Чудово розвиває фантазію та дарує години захопливого творчого процесу.'
            }
        ];

        // Зберігаємо початкові подарунки як стартовий набір, а подальші зміни — у localStorage.
        const GIFT_STORAGE_KEY = 'giftDesignerCatalog_v1';
        try {
            const storedGifts = localStorage.getItem(GIFT_STORAGE_KEY);
            if (storedGifts !== null) {
                const parsedGifts = JSON.parse(storedGifts);
                if (Array.isArray(parsedGifts)) GIFT_DATABASE = parsedGifts;
            } else {
                localStorage.setItem(GIFT_STORAGE_KEY, JSON.stringify(GIFT_DATABASE));
            }
        } catch (error) {
            console.warn('Не вдалося прочитати каталог з localStorage:', error);
        }

        // Labels mapping
        const RECIPIENT_LABELS = {
            'friend': 'Другу / Подрузі',
            'partner': 'Коханій людині',
            'relative': 'Близькому родичу',
            'colleague': 'Колезі / Керівнику',
            'kid': 'Дитині / Підлітку'
        };

        const EVENT_LABELS = {
            'birthday': 'День народження',
            'newyear': 'Новий рік / Різдво',
            'anniversary': 'Річниця / Весілля',
            'professional': 'Професійне свято',
            'justbecause': 'Без приводу'
        };

        // DOM Elements
        const giftForm = document.getElementById('giftForm');
        const recipientInput = document.getElementById('recipient');
        const hobbyInput = document.getElementById('hobby');
        const eventInput = document.getElementById('event');
        const budgetInput = document.getElementById('budget');

        const recipientError = document.getElementById('recipientError');
        const eventError = document.getElementById('eventError');
        const budgetError = document.getElementById('budgetError');
        const errorBanner = document.getElementById('errorBanner');

        const emptyState = document.getElementById('emptyState');
        const resultsContainer = document.getElementById('resultsContainer');
        const giftResultsGrid = document.getElementById('giftResultsGrid');
        const reloadVariantBtn = document.getElementById('reloadVariantBtn');

        const wishlistGrid = document.getElementById('wishlistGrid');
        const wishlistEmptyState = document.getElementById('wishlistEmptyState');
        const wishlistNavCount = document.getElementById('wishlistNavCount');
        const footerWishlistCount = document.getElementById('footerWishlistCount');

        let lastFilteredGifts = [];
        let currentPageIndex = 0;

        // --- LocalStorage Wishlist Logic ---
        function getWishlist() {
            try {
                const data = localStorage.getItem('savedGifts');
                return data ? JSON.parse(data) : [];
            } catch (e) {
                return [];
            }
        }

        function saveWishlist(list) {
            try {
                localStorage.setItem('savedGifts', JSON.stringify(list));
            } catch (e) { }
            renderWishlist();
        }

        function toggleWishlist(giftId) {
            const list = getWishlist();
            const index = list.findIndex(item => item.id === giftId);

            if (index >= 0) {
                list.splice(index, 1);
            } else {
                const giftObj = GIFT_DATABASE.find(g => g.id === giftId);
                if (giftObj) {
                    list.push(giftObj);
                }
            }

            saveWishlist(list);

            if (lastFilteredGifts.length > 0) {
                renderCurrentPage();
            }
        }

        function removeFromWishlist(giftId) {
            const list = getWishlist().filter(item => item.id !== giftId);
            saveWishlist(list);
            if (lastFilteredGifts.length > 0) {
                renderCurrentPage();
            }
        }

        function clearAllWishlist() {
            if (getWishlist().length === 0) return;
            if (confirm('Ви дійсно хочете очистити всі обрані подарунки?')) {
                saveWishlist([]);
                if (lastFilteredGifts.length > 0) {
                    renderCurrentPage();
                }
            }
        }

        function renderWishlist() {
            const wishlist = getWishlist();
            const count = wishlist.length;

            if (wishlistNavCount) wishlistNavCount.textContent = count;
            if (footerWishlistCount) footerWishlistCount.textContent = count;

            if (count === 0) {
                wishlistEmptyState.style.display = 'block';
                wishlistGrid.style.display = 'none';
                wishlistGrid.innerHTML = '';
            } else {
                wishlistEmptyState.style.display = 'none';
                wishlistGrid.style.display = 'grid';

                wishlistGrid.innerHTML = wishlist.map(gift => `
                    <article class="gift-card">
                        <div>
                            <div class="gift-card-header">
                                <span class="gift-badge">${gift.category}</span>
                                <span class="gift-price-tag">~ ${gift.minBudget > 0 ? gift.minBudget.toLocaleString('uk-UA') + ' - ' : ''}${gift.maxBudget.toLocaleString('uk-UA')} ₴</span>
                            </div>
                            <h3 class="gift-title">${gift.title}</h3>
                            <p class="gift-description">${gift.description}</p>
                        </div>
                        <div class="gift-card-actions" style="margin-top: 1rem;">
                            <button class="btn-save-wishlist" style="background: rgba(244, 63, 94, 0.18);" onclick="removeFromWishlist('${gift.id}')">
                                ❌ Видалити з обраного
                            </button>
                        </div>
                    </article>
                `).join('');
            }
        }

        // Mobile Nav Toggle
        const mobileNavToggle = document.getElementById('mobileNavToggle');
        const navLinks = document.getElementById('navLinks');

        if (mobileNavToggle && navLinks) {
            mobileNavToggle.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });

            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('show');
                });
            });
        }

        // Quick select interest category handler (ПРЯМИЙ ФІЛЬТР ДЛЯ ХОБІ)
        function selectInterestCategory(hobbyKey) {
            hobbyInput.value = hobbyKey;

            if (!recipientInput.value) recipientInput.value = 'friend';
            if (!eventInput.value) eventInput.value = 'birthday';
            if (!budgetInput.value) budgetInput.value = 1500;

            const generatorEl = document.getElementById('generator');
            if (generatorEl) {
                generatorEl.scrollIntoView({ behavior: 'smooth' });
            }

            generateGift(recipientInput.value, eventInput.value, Number(budgetInput.value), hobbyKey);
        }

        // Store filtering logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        const storeItems = document.querySelectorAll('.store-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                storeItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'flex';
                    } else {
                        const categories = item.getAttribute('data-category').split(' ');
                        if (categories.includes(filter)) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });

        // Form Submit Handler
        giftForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;

            if (!recipientInput.value) {
                recipientInput.classList.add('invalid');
                recipientError.classList.add('active');
                isValid = false;
            } else {
                recipientInput.classList.remove('invalid');
                recipientError.classList.remove('active');
            }

            if (!eventInput.value) {
                eventInput.classList.add('invalid');
                eventError.classList.add('active');
                isValid = false;
            } else {
                eventInput.classList.remove('invalid');
                eventError.classList.remove('active');
            }

            const budgetVal = Number(budgetInput.value);
            if (!budgetInput.value || isNaN(budgetVal) || budgetVal < 100) {
                budgetInput.classList.add('invalid');
                budgetError.classList.add('active');
                isValid = false;
            } else {
                budgetInput.classList.remove('invalid');
                budgetError.classList.remove('active');
            }

            if (!isValid) {
                errorBanner.classList.add('active');
                resultsContainer.style.display = 'none';
                emptyState.style.display = 'flex';
                return;
            }

            errorBanner.classList.remove('active');
            generateGift(recipientInput.value, eventInput.value, budgetVal, hobbyInput.value);
        });

        function generateGift(recipient, event, budget, hobbyKey = '') {
            let matches = [];

            // 1. If HOBBY is specified, prioritize exact hobby items!
            if (hobbyKey) {
                matches = GIFT_DATABASE.filter(item => item.hobby === hobbyKey);
            }

            // 2. If no hobby or insufficient hobby matches, add recipient & budget matches
            if (matches.length < 4) {
                const addMatches = GIFT_DATABASE.filter(item => {
                    const matchesBudget = budget >= item.minBudget;
                    const matchesRecipient = item.recipients.includes(recipient);
                    return matchesBudget && matchesRecipient && !matches.includes(item);
                });
                matches = matches.concat(addMatches);
            }

            // 3. Fallback if still under 4 items
            if (matches.length < 4) {
                const fallbacks = GIFT_DATABASE.filter(item => !matches.includes(item));
                matches = matches.concat(fallbacks);
            }

            lastFilteredGifts = matches;
            currentPageIndex = 0;
            renderCurrentPage();

            emptyState.style.display = 'none';
            resultsContainer.style.display = 'block';

            resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function renderCurrentPage() {
            const wishlistIds = getWishlist().map(item => item.id);
            const pageSize = 4;

            const startIndex = (currentPageIndex * pageSize) % lastFilteredGifts.length;
            let displayItems = lastFilteredGifts.slice(startIndex, startIndex + pageSize);

            if (displayItems.length < pageSize && lastFilteredGifts.length >= pageSize) {
                displayItems = displayItems.concat(lastFilteredGifts.slice(0, pageSize - displayItems.length));
            }

            const recipientKey = recipientInput.value || 'friend';
            const eventKey = eventInput.value || 'birthday';
            const budgetVal = Number(budgetInput.value) || 1500;

            giftResultsGrid.innerHTML = displayItems.map(gift => {
                const isSaved = wishlistIds.includes(gift.id);
                return `
                    <article class="gift-card">
                        <div>
                            <div class="gift-card-header">
                                <span class="gift-badge">${gift.category}</span>
                                <span class="gift-price-tag">~ ${gift.minBudget > 0 ? gift.minBudget.toLocaleString('uk-UA') + ' - ' : ''}${gift.maxBudget.toLocaleString('uk-UA')} ₴</span>
                            </div>
                            <h3 class="gift-title">${gift.title}</h3>
                            <p class="gift-description">${gift.description}</p>

                            <div class="gift-details-grid">
                                <div class="detail-item">
                                    <span class="detail-label">Отримувач</span>
                                    <span class="detail-value">${RECIPIENT_LABELS[recipientKey] || recipientKey}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Привід</span>
                                    <span class="detail-value">${EVENT_LABELS[eventKey] || eventKey}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Ваш Бюджет</span>
                                    <span class="detail-value">${budgetVal.toLocaleString('uk-UA')} ₴</span>
                                </div>
                            </div>
                        </div>

                        <div class="gift-card-actions">
                            <button class="btn-save-wishlist ${isSaved ? 'saved' : ''}" onclick="toggleWishlist('${gift.id}')">
                                ${isSaved ? '✅ В обраному' : '❤️ Зберегти в обране'}
                            </button>
                        </div>
                    </article>
                `;
            }).join('');
        }

        // Cycle variants button
        reloadVariantBtn.addEventListener('click', () => {
            currentPageIndex++;
            renderCurrentPage();
        });

        // Initialize Wishlist on load
        document.addEventListener('DOMContentLoaded', () => {
            renderWishlist();
        });

        // ==================== АДМІН-ПАНЕЛЬ КАТАЛОГУ ====================
        const adminForm = document.getElementById('adminGiftForm');
        const adminTitle = document.getElementById('adminGiftTitle');
        const adminPrice = document.getElementById('adminGiftPrice');
        const adminDescription = document.getElementById('adminGiftDescription');
        const adminCategory = document.getElementById('adminGiftCategory');
        const adminId = document.getElementById('adminGiftId');
        const adminTitleError = document.getElementById('adminTitleError');
        const adminPriceError = document.getElementById('adminPriceError');
        const adminMessage = document.getElementById('adminFormMessage');
        const adminSaveButton = document.getElementById('adminSaveButton');
        const adminCancelButton = document.getElementById('adminCancelEdit');

        function escapeGiftHTML(value) {
            return String(value ?? '').replace(/[&<>"']/g, char => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            })[char]);
        }

        function persistGiftDatabase() {
            try {
                localStorage.setItem(GIFT_STORAGE_KEY, JSON.stringify(GIFT_DATABASE));
                return true;
            } catch (error) {
                showAdminMessage('Не вдалося зберегти дані в браузері. Перевірте доступне місце та налаштування сховища.', 'error');
                return false;
            }
        }

        function showAdminMessage(message, type) {
            adminMessage.textContent = message;
            adminMessage.className = 'admin-message active ' + type;
        }

        function clearAdminErrors() {
            adminTitle.classList.remove('invalid');
            adminPrice.classList.remove('invalid');
            adminTitleError.textContent = '';
            adminPriceError.textContent = '';
            adminTitleError.classList.remove('active');
            adminPriceError.classList.remove('active');
        }

        function setAdminFieldError(input, errorElement, message) {
            input.classList.add('invalid');
            errorElement.textContent = message;
            errorElement.classList.add('active');
        }

        function resetAdminForm() {
            adminForm.reset();
            adminId.value = '';
            clearAdminErrors();
            adminSaveButton.textContent = '＋ Додати подарунок';
            adminCancelButton.hidden = true;
            adminMessage.className = 'admin-message';
            adminMessage.textContent = '';
        }

        function renderPublicGiftCatalog() {
            const catalog = document.getElementById('publicGiftCatalog');
            if (!GIFT_DATABASE.length) {
                catalog.innerHTML = '<div class="catalog-empty">Каталог поки порожній. Додайте перший подарунок в адмін-панелі.</div>';
                return;
            }
            catalog.innerHTML = GIFT_DATABASE.map(gift => `
                <article class="gift-card catalog-gift-card">
                    <div>
                        <div class="gift-card-header">
                            <span class="gift-badge">${escapeGiftHTML(gift.category || 'Подарунок')}</span>
                            <span class="gift-price-tag">${Number(gift.maxBudget ?? gift.minBudget ?? 0).toLocaleString('uk-UA')} ₴</span>
                        </div>
                        <h3 class="gift-title">${escapeGiftHTML(gift.title)}</h3>
                        <p class="gift-description">${escapeGiftHTML(gift.description || 'Ідея подарунка для особливої нагоди.')}</p>
                    </div>
                </article>`).join('');
        }

        function renderAdminGiftList() {
            const list = document.getElementById('adminGiftList');
            document.getElementById('adminGiftCount').textContent = `${GIFT_DATABASE.length} позицій`;
            if (!GIFT_DATABASE.length) {
                list.innerHTML = '<div class="catalog-empty">Подарунків немає. Скористайтеся формою вище, щоб додати перший.</div>';
                return;
            }
            list.innerHTML = GIFT_DATABASE.map(gift => `
                <div class="admin-gift-row">
                    <div class="admin-gift-info">
                        <strong>${escapeGiftHTML(gift.title)}</strong>
                        <span>${Number(gift.maxBudget ?? gift.minBudget ?? 0).toLocaleString('uk-UA')} ₴ · ID: ${escapeGiftHTML(gift.id)}</span>
                    </div>
                    <div class="admin-gift-actions">
                        <button type="button" class="admin-action-btn" data-admin-edit="${escapeGiftHTML(gift.id)}">✏️ Редагувати</button>
                        <button type="button" class="admin-action-btn delete" data-admin-delete="${escapeGiftHTML(gift.id)}">🗑️ Видалити</button>
                    </div>
                </div>`).join('');
        }

        function refreshGiftViews() {
            renderPublicGiftCatalog();
            renderAdminGiftList();
            // Оновлюємо вже показані рекомендації за ID, не зачіпаючи інші записи.
            const currentIds = new Set(GIFT_DATABASE.map(gift => gift.id));
            lastFilteredGifts = (lastFilteredGifts || []).map(gift => GIFT_DATABASE.find(item => item.id === gift.id)).filter(Boolean);
            if (lastFilteredGifts.length) {
                currentPageIndex = Math.min(currentPageIndex, Math.max(0, Math.ceil(lastFilteredGifts.length / 4) - 1));
                renderCurrentPage();
            } else if (typeof giftResultsGrid !== 'undefined' && giftResultsGrid) {
                giftResultsGrid.innerHTML = '';
            }
        }

        adminForm.addEventListener('submit', function (event) {
            event.preventDefault();
            clearAdminErrors();
            adminMessage.className = 'admin-message';
            let valid = true;
            const title = adminTitle.value.trim();
            const priceText = adminPrice.value.trim();
            const price = Number(priceText);

            if (!title) {
                setAdminFieldError(adminTitle, adminTitleError, 'Введіть назву подарунка. Поле не може бути порожнім або містити лише пробіли.');
                valid = false;
            }
            if (priceText === '' || !Number.isFinite(price) || price < 0) {
                setAdminFieldError(adminPrice, adminPriceError, 'Введіть коректну ціну числом, не меншою за 0.');
                valid = false;
            }
            if (!valid) {
                showAdminMessage('Виправте помилки у виділених полях. Дані не збережено.', 'error');
                return;
            }

            const editingId = adminId.value;
            const existing = editingId ? GIFT_DATABASE.find(gift => gift.id === editingId) : null;
            if (editingId && !existing) {
                showAdminMessage('Цей подарунок уже не знайдено. Оновіть список і спробуйте ще раз.', 'error');
                return;
            }

            const giftData = {
                ...(existing || {}),
                id: existing ? existing.id : (typeof crypto !== 'undefined' && crypto.randomUUID
                    ? crypto.randomUUID() : 'gift-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9)),
                title,
                minBudget: price,
                maxBudget: price,
                description: adminDescription.value.trim() || 'Ідея подарунка для особливої нагоди.',
                category: adminCategory.value.trim() || 'Подарунки',
                hobby: existing?.hobby || '',
                recipients: existing?.recipients || ['friend', 'partner', 'relative', 'colleague', 'kid'],
                events: existing?.events || ['birthday', 'newyear', 'anniversary', 'professional', 'justbecause']
            };

            const nextDatabase = existing
                ? GIFT_DATABASE.map(gift => gift.id === editingId ? giftData : gift)
                : [...GIFT_DATABASE, giftData];
            const previousDatabase = GIFT_DATABASE;
            GIFT_DATABASE = nextDatabase;
            if (!persistGiftDatabase()) {
                GIFT_DATABASE = previousDatabase;
                return;
            }
            refreshGiftViews();
            resetAdminForm();
            showAdminMessage(existing ? 'Подарунок успішно оновлено.' : 'Подарунок додано до каталогу.', 'success');
        });

        adminCancelButton.addEventListener('click', resetAdminForm);

        document.getElementById('adminGiftList').addEventListener('click', function (event) {
            const editButton = event.target.closest('[data-admin-edit]');
            const deleteButton = event.target.closest('[data-admin-delete]');

            if (editButton) {
                const gift = GIFT_DATABASE.find(item => item.id === editButton.dataset.adminEdit);
                if (!gift) return;
                adminId.value = gift.id;
                adminTitle.value = gift.title || '';
                adminPrice.value = String(gift.maxBudget ?? gift.minBudget ?? '');
                adminDescription.value = gift.description || '';
                adminCategory.value = gift.category || '';
                clearAdminErrors();
                adminSaveButton.textContent = 'Зберегти зміни';
                adminCancelButton.hidden = false;
                adminMessage.className = 'admin-message';
                adminForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                adminTitle.focus();
            }

            if (deleteButton) {
                const id = deleteButton.dataset.adminDelete;
                const gift = GIFT_DATABASE.find(item => item.id === id);
                if (!gift) return;
                if (!window.confirm(`Видалити подарунок «${gift.title}»? Цю дію не можна скасувати.`)) return;
                const nextDatabase = GIFT_DATABASE.filter(item => item.id !== id);
                const previousDatabase = GIFT_DATABASE;
                GIFT_DATABASE = nextDatabase;
                if (!persistGiftDatabase()) {
                    GIFT_DATABASE = previousDatabase;
                    return;
                }
                // Прибираємо лише видалений ID з обраного.
                try {
                    const wishlist = JSON.parse(localStorage.getItem('savedGifts') || '[]');
                    localStorage.setItem('savedGifts', JSON.stringify(wishlist.filter(item => item.id !== id)));
                } catch (_) {}
                refreshGiftViews();
                renderWishlist();
                resetAdminForm();
                showAdminMessage('Подарунок видалено з каталогу.', 'success');
            }
        });

        adminTitle.addEventListener('input', () => {
            if (adminTitle.value.trim()) {
                adminTitle.classList.remove('invalid');
                adminTitleError.textContent = '';
                adminTitleError.classList.remove('active');
            }
        });
        adminPrice.addEventListener('input', () => {
            const text = adminPrice.value.trim();
            const value = Number(text);
            if (text !== '' && Number.isFinite(value) && value >= 0) {
                adminPrice.classList.remove('invalid');
                adminPriceError.textContent = '';
                adminPriceError.classList.remove('active');
            }
        });

        // Початковий рендер каталогу та панелі з урахуванням збережених даних.
        refreshGiftViews();
